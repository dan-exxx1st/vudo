<template>
  <div class="todo-folder" :class="{ active: isActive }" @click="openFolder">
    <div class="todo-folder__description">
      <div class="todo-folder__description__color"></div>
      <span class="todo-folder__description__text">{{ folder.name }}</span>
    </div>
    <div class="todo-folder__delete-btn">
      <img :src="closeIcon" alt="Close" />
    </div>
  </div>
</template>

<script>
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
    }
  },
  computed: {
    isActive: {
      get() {
        const currentFolderId = this.$route.query.folder;
        return currentFolderId === this.folder.id ? true : false;
      }
    }
  }
};
</script>
