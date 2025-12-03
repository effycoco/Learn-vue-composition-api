<script setup>
import ChildCompo from './ChildCompo.vue';
const msg = 'Hello from Component';
function add(x, y) {
  return x + y;
}
</script>
<template>
  <h1>{{ msg }}</h1>
  <p>{{ add(4, 8) }}</p>
  <ChildCompo />
</template>

<style scoped>
h1 {
  color: #ccc;
}
</style>
