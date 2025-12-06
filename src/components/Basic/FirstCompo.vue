<script setup>
import ChildCompo from './ChildCompo.vue';
const msg = 'Hello from Component';
function add(x, y) {
  return x + y;
}
</script>
<template>
  <div class="card">
    <h2>1.Simple Start</h2>
    <h3>{{ msg }}</h3>
    <p>{{ add(4, 8) }}</p>
    <ChildCompo />
  </div>
</template>

<style scoped>
h3 {
  color: #ccc;
}
</style>
