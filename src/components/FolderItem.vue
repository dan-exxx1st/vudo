<template>
  <div class="todo-folder" :class="{ active: isActive }" @click="openFolder">
    <div class="todo-folder__description">
      <div
        class="todo-folder__description__color"
        :style="{ background: `${folder.color}` }"
      ></div>
      <span class="todo-folder__description__text">{{ folder.name }}</span>
    </div>
    <div class="todo-folder__delete-btn" @click="removeFolder">
      <img :src="closeIcon" alt="Delete" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CloseGrey from '@/assets/icons/close-grey.svg';
export default {
  data() {
    return {
      closeIcon: CloseGrey
    };
  },
  props: {
    folder: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    openFolder() {
      this.$router.push(`/?folder=${this.$props.folder.id}`);
    },
    async removeFolder() {
      const deletedFolder = await this.api.deleteFolder(this.folder.id);
      this.$router.push('/');
      this.deleteFolder(deletedFolder.id);
    },
    ...mapActions(['deleteFolder'])
  },
  computed: {
    isActive: {
      get() {
        const currentFolderId = this.$route.query.folder;
        return currentFolderId === this.folder.id ? true : false;
      }
    }
  },
  inject: ['api']
};
</script>
