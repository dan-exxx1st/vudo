<template>
  <div class="home">
    <!-- <radio-button @changeChecked="onChecked" text="Hello" /> -->
    <!-- <todo-folder-item /> -->
    <!-- <add-button text="Новая задача" variant="medium" />
    <add-button text="Добавить папку" variant="small" /> -->
    <todo-item />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
export default {
  name: 'Home',
  components: {
    TodoItem
  },

  methods: {
    onChecked({ text }) {
      console.log(text);
    }
  }
};
</script>
