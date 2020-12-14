<template>
  <div class="todo-item">
    <check-box text="Some text" />
    <img class="todo-item__close" :src="closeIcon" alt="close" />
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue';

import CloseIcon from '../assets/icons/close-grey.svg';

export default {
  components: { CheckBox },

  data() {
    return {
      closeIcon: CloseIcon
    };
  }
};
</script>

<style lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 470px;
  padding: 10px 0;

  &:hover > &__close {
    opacity: 1;
  }

  &__close {
    transition: 0.2s all;
    width: 11px;
    height: 11px;
    cursor: pointer;
    opacity: 0;
  }
}
</style>
