<template>
  <button class="button" :class="$props.variant">
    <img :src="addIcon" alt="add" class="button__icon" v-if="icon" />
    <span class="button__text">{{ text }}</span>
  </button>
</template>

<script>
import AddIcon from '@/assets/icons/add.svg';

export default {
  props: {
    text: {
      type: String
    },
    variant: {
      type: String
    },
    icon: {
      type: Boolean
    }
  },
  data() {
    return {
      addIcon: AddIcon
    };
  }
};
</script>
