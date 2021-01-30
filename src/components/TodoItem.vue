<template>
  <div class="todo-item">
    <CheckBox @click="updateTodoChecked" :text="todo.text" :checked="isDone" />
    <img
      class="todo-item__close"
      :src="closeIcon"
      alt="close"
      @click="$emit('deleteTodo', todo.id)"
    />
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue';
import CloseIcon from '@/assets/icons/close-grey.svg';

export default {
  components: { CheckBox },
  props: {
    todo: {
      type: Object,
      default() {
        return {};
      }
    },
    deleteTodo: {
      type: Function
    }
  },
  data() {
    return {
      closeIcon: CloseIcon,
      isDone: this.todo.done
    };
  },
  methods: {
    async updateTodoChecked(props) {
      const newIsDone = !props.checked;
      this.isDone = newIsDone;
      const payload = {
        todoId: this.todo.id,
        done: newIsDone
      };
      await this.api.updateTodoDone(payload);
    }
  },
  inject: ['api']
};
</script>
