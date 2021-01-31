<template>
  <div class="folders">
    <div
      class="folders__title"
      :class="{ active: allFolders }"
      @click="clearFolderId"
    >
      <img :src="worksSvg" alt="Works" />
      <span>Все задачи</span>
    </div>
    <div class="folders__list">
      <FolderItem v-for="folder in folders" :key="folder.id" :folder="folder" />
    </div>
    <Button
      text="Добавить папку"
      icon
      class="folders__add-btn"
      @click="addFolderOpen = true"
    />
    <AddFolder v-if="addFolderOpen" @close="closeAddFolder" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import FolderItem from './FolderItem.vue';
import AddFolder from './AddFolder';
import Button from './Button';
import WorksSvg from '@/assets/icons/works.svg';

export default {
  created: async function() {
    const data = await this.api.getAllFolders();
    this.setFolders(data.folders);
  },
  data() {
    return {
      worksSvg: WorksSvg,
      addFolderOpen: false
    };
  },
  methods: {
    ...mapActions(['setFolders']),
    clearFolderId() {
      this.$router.push('/');
    },
    closeAddFolder() {
      this.addFolderOpen = false;
    }
  },
  computed: {
    ...mapState(['folders']),
    allFolders() {
      return this.currentFolderId.length === 0 ? true : false;
    }
  },

  inject: ['api'],
  props: {
    currentFolderId: {
      type: String,
      default: ''
    }
  },
  components: {
    FolderItem,
    AddFolder,
    Button
  }
};
</script>
