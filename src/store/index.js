import Vue from 'vue';
import Vuex from 'vuex';

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
  },
});
