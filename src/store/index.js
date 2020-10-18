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
        userAuthenticated: false,
      },
      mutations: {
        userAuthenticated(state) {
          state.userAuthenticated = true;
        },
      },
      actions: {
        authenticateUser({ commit }) {
          commit('userAuthenticated');
        },
      },
    },
  },
});
