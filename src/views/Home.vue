<template>
  <div class="home">
    <!-- <radio-button @changeChecked="onChecked" text="Hello" /> -->
    <!-- <todo-folder-item /> -->
    <!-- <add-button text="Новая задача" variant="medium" />
    <add-button text="Добавить папку" variant="small" /> -->
    <todo-item />
    <ul>
      <li v-for="folder in folders" :key="folder.id">
        {{ folder.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import TodoItem from '@/components/TodoItem.vue';
export default {
  created: async function() {
    const response = await this.api.getAllFolders();
    this.setDialogs(response.data);
  },
  inject: ['api'],
  name: 'Home',
  components: {
    TodoItem
  },
  methods: {
    onChecked({ text }) {
      console.log(text);
    },
    ...mapActions(['setDialogs'])
  },
  computed: {
    ...mapState(['folders'])
  }
};
</script>
