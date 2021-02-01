import { createStore } from 'vuex';

export default createStore({
  state: {
    folders: []
  },
  mutations: {
    setFolders(state, payload) {
      state.folders = payload;
    },
    addFolder(state, payload) {
      state.folders.push(payload);
    },
    deleteFolder(state, payload) {
      const folders = state.folders;
      const folderIndex = folders.indexOf(
        folders.find(folder => folder.id === payload)
      );
      const newFolders = [
        ...folders.slice(0, folderIndex),
        ...folders.slice(folderIndex + 1)
      ];
      state.folders = newFolders;
    },
    updateFolder(state, payload) {
      const folders = state.folders;
      const { id } = payload;
      const folderIndex = folders.indexOf(
        folders.find(folder => folder.id === id)
      );
      const newFolders = [
        ...folders.slice(0, folderIndex),
        { ...payload },
        ...folders.slice(folderIndex + 1)
      ];
      state.folders = newFolders;
    }
  },
  actions: {
    setFolders({ commit }, folders) {
      commit('setFolders', folders);
    },
    addFolder({ commit }, folder) {
      commit('addFolder', folder);
    },
    deleteFolder({ commit }, folderId) {
      commit('deleteFolder', folderId);
    },
    updateFolder({ commit }, updatedFolder) {
      commit('updateFolder', updatedFolder);
    }
  },
  modules: {}
});
