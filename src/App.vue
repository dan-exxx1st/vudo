<template>
  <router-view />
</template>

<script>
import { Api } from '@/api/';
const api = new Api();
export default {
  provide: {
    api
  }
};
</script>
