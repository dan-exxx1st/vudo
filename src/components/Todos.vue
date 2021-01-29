<template>
  <div class="todos">
    <div class="todos__title">
      <h2>{{ folder.name }}</h2>
      <img :src="pencil" alt="edit" />
    </div>
    <div class="todos__line"></div>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    <Button
      v-if="!addTodo"
      icon
      text="Новая задача"
      @click="handleAddTodoOpen"
    />
    <AddTodo
      v-else
      :cancel="handleAddTodoOpen"
      :folderId="folder.id"
      :addNewTodo="addNewTodo"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoItem from './TodoItem';
import Button from './Button';
import AddTodo from './AddTodo';
import PencilIcon from '@/assets/icons/pencil.svg';

export default {
  async created() {
    const todos = await this.api.getTodosByFolderId(this.folderId);
    this.todos = todos;
  },
  data() {
    return {
      pencil: PencilIcon,
      todos: [],
      addTodo: false
    };
  },
  methods: {
    handleAddTodoOpen() {
      this.addTodo = !this.addTodo;
    },
    addNewTodo(todo) {
      this.todos.push(todo);
    }
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
    TodoItem,
    Button,
    AddTodo
  }
};
</script>
