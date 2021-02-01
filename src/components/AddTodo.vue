<template>
  <div class="add-todo">
    <TextField
      placeholder="Текст задачи"
      :text="todoText"
      @update:text="updateText"
    />
    <div class="add-todo__buttons">
      <Button text="Добавить задачу" variant="primary" @click="createTodo" />
      <Button text="Отмена" variant="secondary" @click="cancel()" />
    </div>
  </div>
</template>

<script>
import Button from './Button';
import TextField from './TextField';
export default {
  data() {
    return {
      todoText: ''
    };
  },
  methods: {
    async createTodo() {
      if (this.todoText.length > 0) {
        const payload = {
          folderId: this.folderId,
          text: this.todoText
        };
        const newTodo = await this.api.createTodo(payload);
        this.addNewTodo(newTodo);
        this.todoText = '';
        this.cancel(false);
      } else {
        alert('Todo text lenght must be than 0.');
      }
    },
    updateText(value) {
      this.todoText = value;
    }
  },
  props: {
    cancel: {
      type: Function
    },
    folderId: {
      type: String
    },
    addNewTodo: {
      type: Function
    }
  },
  inject: ['api'],
  components: {
    Button,
    TextField
  }
};
</script>
