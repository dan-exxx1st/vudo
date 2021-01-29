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
    <TodoFolderItem
      v-for="folder in folders"
      :key="folder.id"
      :folder="folder"
    ></TodoFolderItem>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import TodoFolderItem from './TodoFolderItem.vue';
import WorksSvg from '@/assets/icons/works.svg';

export default {
  created: async function() {
    const data = await this.api.getAllFolders();
    this.setDialogs(data.folders);
  },
  inject: ['api'],
  components: {
    TodoFolderItem
  },
  methods: {
    ...mapActions(['setDialogs']),
    clearFolderId() {
      this.$router.push('/');
    }
  },
  computed: {
    ...mapState(['folders']),
    allFolders() {
      return this.currentFolderId.length === 0 ? true : false;
    }
  },
  data() {
    return {
      worksSvg: WorksSvg
    };
  },
  props: {
    currentFolderId: {
      type: String,
      default: ''
    }
  }
};
</script>
