<template>
  <div class="checkbox-wrapper">
    <label class="checkbox">
      <input class="checkbox__input" type="checkbox" />
      <span class="checkbox__span" @click="$emit('changeChecked')">
        <svg viewBox="0 -46 417.81333 417" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0"
          />
        </svg>
      </span>
    </label>
    <p class="checkbox__text">Изучить JavaScript</p>
  </div>
</template>

<script>
export default {
  emits: ['changeChecked']
};
</script>

<style lang="scss">
.checkbox-wrapper {
  display: flex;
  align-items: center;
}

.checkbox {
  position: relative;

  &__input {
    display: none;

    &:checked ~ span {
      background: var(--color-light-green);
      border-color: var(--color-light-green);
      & > svg {
        visibility: visible;
      }
    }
  }

  &__span {
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all linear 0.2s;

    & > svg {
      visibility: hidden;
      fill: var(--color-white);
      width: 10px;
    }
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    user-select: none;

    margin-left: 15px;

    color: var(--color-black);
  }
}
</style>
