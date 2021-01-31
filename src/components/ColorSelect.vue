<template>
  <div
    class="color-select"
    :class="{ select: isSelect }"
    :style="{ background: color }"
    @click="select"
  ></div>
</template>

<script>
export default {
  methods: {
    select() {
      this.$emit('update:select', this.color);
    }
  },
  props: {
    color: {
      type: String
    },
    isSelect: {
      type: Boolean
    }
  }
};
</script>
