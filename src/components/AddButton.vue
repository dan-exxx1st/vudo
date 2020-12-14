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

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  border: none;
  background: none;

  &__icon {
    &.medium {
      width: 15px;
      height: 15px;
    }
    &.small {
      width: 10px;
      height: 10px;
    }
  }

  &__text {
    &.medium {
      margin-left: 20px;

      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.15px;

      color: var(--color-grey);
    }
    &.small {
      margin-left: 10px;

      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.15px;

      color: var(--color-dark-grey);
    }
  }
}
</style>
