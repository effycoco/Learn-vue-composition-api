<script setup>
import { ref, computed } from 'vue';
const counter = ref(0);
const squared = computed(() => counter.value ** 2);
</script>
<template>
  <div class="card">
    <h2>4.Computed Properties</h2>
    <h2>counter: {{ counter }}</h2>
    <h2>squared counter: {{ squared }}</h2>
    <button @click="counter++">add</button>
  </div>
</template>
