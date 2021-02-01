<template>
  <div class="update-folder">
    <div
      type="text"
      contenteditable="true"
      class="update-folder__field"
      @input="update"
      :style="{ color: `${color}` }"
    >
      {{ name }}
    </div>
    <img
      src="/assets/accept-green.svg"
      alt="Accept"
      class="update-folder__accept"
      @click="updateFolderName"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  created() {
    this.name = this.$props.folder.name;
  },
  data() {
    return {
      name: ''
    };
  },
  methods: {
    async updateFolderName() {
      if (this.name.length > 0) {
        const { id } = this.folder;
        const updatedFolder = await this.api.updateFolderName({
          folderId: id,
          name: this.name
        });
        this.updateFolder(updatedFolder);
        this.$emit('close');
      } else {
        alert('Folder name lenght must be than 0');
      }
    },
    update(event) {
      const newText = event.target.textContent;
      if (newText.length > 0) {
        this.name = newText;
      }
    },
    ...mapActions(['updateFolder'])
  },
  props: {
    folder: {
      type: Object,
      default: () => ({})
    },
    color: {
      type: String
    }
  },
  inject: ['api']
};
</script>
