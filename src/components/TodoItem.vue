<template>
  <div class="todo-item">
    <check-box text="Some text" />
    <img class="todo-item__close" :src="closeIcon" alt="close" />
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue';
import CloseIcon from '@/assets/icons/close-grey.svg';

export default {
  components: { CheckBox },

  data() {
    return {
      closeIcon: CloseIcon
    };
  }
};
</script>
