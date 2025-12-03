<script setup>
import { useCounter } from './counter';
const { count, increment, decrement } = useCounter();
</script>
<template>
  <h3>Count: {{ count }}</h3>
  <button @click="increment">加</button>
  <button @click="decrement">减</button>
</template>
