<template>
  <input type="text" class="text-field" v-model="propModel" />
</template>

<script>
export default {
  computed: {
    propModel: {
      get() {
        return this.text;
      },
      set(value) {
        this.$emit('update:text', value);
      }
    }
  },
  props: {
    text: {
      type: String
    }
  }
};
</script>
