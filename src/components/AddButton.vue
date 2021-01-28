<template>
  <button class="button">
    <img
      :src="addIcon"
      alt="add"
      :srcset="addIcon"
      class="button__icon"
      :class="$props.variant"
    />
    <span class="button__text" :class="$props.variant">{{ text }}</span>
  </button>
</template>

<script>
import AddIcon from '@/assets/icons/add.svg';

export default {
  props: ['text', 'variant'],
  data() {
    return {
      addIcon: AddIcon
    };
  }
};
</script>
