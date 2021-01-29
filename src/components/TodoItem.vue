<template>
  <div class="todo-item">
    <CheckBox :text="text" />
    <img class="todo-item__close" :src="closeIcon" alt="close" />
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue';
import CloseIcon from '@/assets/icons/close-grey.svg';

export default {
  components: { CheckBox },
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      closeIcon: CloseIcon
    };
  }
};
</script>
