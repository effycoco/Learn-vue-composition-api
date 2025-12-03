<script setup>
import { ref } from 'vue';
const count = ref(10);
const increment = () => count.value++;
const decrement = () => count.value--;
defineExpose({ count, increment, decrement });
</script>
<template>
  <h4>Child Ref</h4>
  <p>count: {{ count }}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
