import Vue from 'vue';
import Vuex from 'vuex';
import { LOCKS } from '../config/locks';

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
        // TODO: change this to false
        userAuthenticated: true,
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
      },
      getters: {
        locksSortedByConnectivity:
          (state) => state.locks.sort((a, b) => b.connectivity - a.connectivity),
        locksWithoutConnectivity: (state) => state.locks.filter((lock) => lock.connectivity === 0),
        sharedLocks: (state) => state.locks.filter((lock) => lock.sharedWith.length > 0),
      },
    },
  },
});
