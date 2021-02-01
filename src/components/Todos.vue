<template>
  <div class="todos">
    <UpdateFolder
      :color="folder.color"
      :folder="folder"
      v-if="updateTodo"
      @close="updateTodo = false"
    />
    <div class="todos__title" v-else>
      <h2 :style="{ color: `${folder.color}` }">{{ folder.name }}</h2>
      <img :src="pencil" alt="edit" @click="updateTodo = true" />
    </div>

    <div class="todos__line"></div>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @deleteTodo="deleteTodo"
    />
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
import UpdateFolder from './UpdateFolder';
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
      addTodo: false,
      updateTodo: false
    };
  },
  methods: {
    handleAddTodoOpen() {
      this.addTodo = !this.addTodo;
    },
    addNewTodo(todo) {
      this.todos.push(todo);
    },
    async deleteTodo(todoId) {
      const result = await this.api.deleteTodo(todoId);
      if (result) {
        const todos = this.todos;
        const todoIndex = todos.indexOf(
          todos.find(todo => todo.id === result.id)
        );
        const newTodos = [
          ...todos.slice(0, todoIndex),
          ...todos.slice(todoIndex + 1)
        ];
        this.todos = newTodos;
      }
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
    AddTodo,
    UpdateFolder
  }
};
</script>
