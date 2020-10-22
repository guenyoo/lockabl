import Vue from 'vue';
import Vuex from 'vuex';
import { LOCKS, SHARED } from '../config/locks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: {
      namespaced: true,
      state: {
        userAuthenticated: false,
      },
      mutations: {
        userAuthenticated(state) {
          state.userAuthenticated = true;
        },
        logout(state) {
          state.userAuthenticated = false;
        },
      },
      actions: {
        authenticateUser({ commit }) {
          commit('userAuthenticated');
        },
        logout({ commit }) {
          commit('logout');
        },
      },
    },
    lockStore: {
      namespaced: true,
      state: {
        locks: LOCKS,
        shared: SHARED,
      },
      getters: {
        locksSortedByConnectivity:
          (state) => state.locks
            .filter((lock) => lock.connectivity)
            .sort((a, b) => b.connectivity - a.connectivity),
        locksWithoutConnectivity: (state) => state.locks.filter((lock) => lock.connectivity === 0),
        sharedLocks: (state) => (state.shared.length > 0 ? state.shared : []),
      },
      actions: {
        removeFromShared({ state, commit }, { lockId, uid }) {
          const specificLock = state.locks.find((lock) => lock.id === lockId);
          const sharedLocksWithSpecificLockRemoved = specificLock
            .sharedWith
            .filter((remove) => remove.userId !== uid);
          commit('setSharedAccess', {
            id: specificLock.id,
            arr: sharedLocksWithSpecificLockRemoved,
          });
        },
        changeLockStatus({ commit }, { lockId, newStatus }) {
          commit('changeLockStatus', { lockId, newStatus });
        },
        changeFavStatus({ commit }, { lockId }) {
          commit('changeFavStatus', { lockId });
        },
      },
      mutations: {
        setSharedAccess(state, { id, arr }) {
          state.locks.find((lock) => lock.id === id).sharedWith = arr;
        },
        changeLockStatus(state, { lockId, newStatus }) {
          state.locks.find((lock) => lock.id === lockId).status = newStatus;
        },
        changeFavStatus(state, { lockId }) {
          state
            .locks
            .find((lock) => lock.id === lockId)
            .favorite = !state.locks.find((lock) => lock.id === lockId).favorite;
        },
      },
    },
  },
});
