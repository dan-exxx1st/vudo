import { createStore } from 'vuex';

export default createStore({
  state: {
    folders: []
  },
  mutations: {
    setDialogs(state, payload) {
      state.folders = payload.folders;
    }
  },
  actions: {
    setDialogs({ commit }, folders) {
      commit('setDialogs', folders);
    }
  },
  modules: {}
});
