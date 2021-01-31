<template>
  <div class="add-folder">
    <TextField
      placeholder="Название папки"
      :text="folderName"
      @update:text="updateFolderName"
    />
    <button class="add-folder__close" @click="closeIcon">
      <img class="add-folder__close__icon" src="/assets/close-white.svg" />
    </button>
    <div class="add-folder__colors">
      <ColorSelect
        v-for="color in colors"
        :key="color"
        :color="color"
        :isSelect="color === currentSelect"
        @update:select="updateCurrentSelect"
      />
    </div>
    <Button
      text="Добавить"
      variant="primary"
      class="w100"
      @click="createFolder"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TextField from './TextField';
import ColorSelect from './ColorSelect';
import Button from './Button';

export default {
  data() {
    return {
      colors: [
        '#C9D1D3',
        '#42B883',
        '#64C4ED',
        '#FFBBCC',
        '#B6E6BD',
        '#C355F5',
        '#09011A',
        '#FF6464'
      ],
      currentSelect: '#C9D1D3',
      folderName: ''
    };
  },
  methods: {
    updateCurrentSelect(color) {
      this.currentSelect = color;
    },
    updateFolderName(value) {
      this.folderName = value;
    },
    closeIcon() {
      this.$emit('close');
    },
    async createFolder() {
      const folder = await this.api.createFolder({
        name: this.folderName,
        color: this.currentSelect
      });
      this.addFolder(folder);
      this.closeIcon();
    },
    ...mapActions(['addFolder'])
  },
  components: {
    TextField,
    ColorSelect,
    Button
  },
  inject: ['api']
};
</script>
