<script setup>
import { onBeforeMount, onMounted, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue';
onBeforeMount(() => {
  console.log('组件即将挂载');
});
onMounted(() => {
  console.log('组件已挂载');
});
onUpdated(() => {
  console.log('组件已更新');
});
onBeforeUnmount(() => {
  console.log('组件即将取消挂载');
});
onUnmounted(() => {
  console.log('组件已取消挂载');
});
const msg = ref('hello');
</script>
<template>
  <h1>Lifecycle Hooks</h1>
  <h3>{{ msg }}</h3>
  <button @click="msg = 'New Message'">Change Message</button>
</template>
