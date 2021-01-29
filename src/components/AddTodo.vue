<template>
  <div class="add-todo">
    <input
      type="text"
      class="add-todo__input"
      placeholder="Текст задачи"
      v-model="todoText"
    />
    <div class="add-todo__buttons">
      <Button text="Добавить задачу" variant="primary" @click="createTodo" />
      <Button text="Отмена" variant="secondary" @click="cancel()" />
    </div>
  </div>
</template>

<script>
import Button from './Button';
export default {
  data() {
    return {
      todoText: ''
    };
  },
  methods: {
    async createTodo() {
      const payload = {
        folderId: this.folderId,
        text: this.todoText
      };
      const newTodo = await this.api.createTodo(payload);
      this.addNewTodo(newTodo);
      this.todoText = '';
      this.cancel(false);
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
    Button
  }
};
</script>
