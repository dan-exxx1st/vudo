<template>
  <div class="todos">
    <div class="todos__title">
      <h2>{{ folder.name }}</h2>
      <img :src="pencil" alt="edit" />
    </div>
    <div class="todos__line"></div>
    <TodoItem v-for="todo in todos" :key="todo.id" :text="todo.text" />
    <div class="todos__add">
      <img :src="add" alt="Add" />
      <span>Новая задача</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoItem from './TodoItem';
import PencilIcon from '@/assets/icons/pencil.svg';
import AddIcon from '@/assets/icons/add.svg';

export default {
  async created() {
    const todos = await this.api.getTodosByFolderId(this.folderId);
    this.todos = todos;
  },
  data() {
    return {
      pencil: PencilIcon,
      add: AddIcon,
      todos: []
    };
  },
  props: {
    folderId: {
      type: String
    }
  },
  computed: {
    ...mapState(['folders']),
    folder() {
      return this.folders.find(folder => folder.id === this.folderId);
    }
  },
  inject: ['api'],
  components: {
    TodoItem
  }
};
</script>
