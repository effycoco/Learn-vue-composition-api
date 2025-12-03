<script setup>
import { useCounter } from './counter';
const { count, increment, decrement } = useCounter();
</script>
<template>
  <h2>Another Example</h2>
  <h3>Count: {{ count }}</h3>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
