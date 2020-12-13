<template>
  <div class="home">
    <radio-button @changeChecked="onChecked" />
  </div>
</template>

<script>
import RadioButton from '@/components/RadioButton.vue';

export default {
  name: 'Home',
  components: {
    RadioButton
  },

  data() {
    return {
      checked: false
    };
  },
  methods: {
    onChecked() {
      this.checked = !this.checked;
    }
  }
};
</script>
