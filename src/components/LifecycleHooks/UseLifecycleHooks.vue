<script setup>
import { ref } from 'vue';
import LifecycleHooks from './LifecycleHooks.vue';
const isMounted = ref(false);
</script>
<template>
  <div class="card">
    <h2>10.Lifecycle Hooks</h2>
    <button @click="isMounted = !isMounted">{{ isMounted ? 'Unmount' : 'Mount' }}</button>
    <LifecycleHooks v-if="isMounted" />
  </div>
</template>
