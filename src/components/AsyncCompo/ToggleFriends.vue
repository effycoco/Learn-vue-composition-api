<script setup>
// import RenderFriends from './RenderFriends.vue';
import { ref, defineAsyncComponent } from 'vue';
const showList = ref(false);
const RenderFriends = defineAsyncComponent(() => import('./RenderFriends.vue'));
</script>
<template>
  <h1>Async Component</h1>
  <p>
    没用异步组件时，虽然子组件在页面未渲染，在开发者工具的网络页可以看到它已经加载了，属于首页加载的资源。但用了异步组件后，只有用户点击按钮需要渲染时才加载该组件，而非在首次加载时就下载文件，这样可以节省首页加载资源。
  </p>
  <button @click="() => (showList = !showList)">展示朋友</button>
  <div v-if="showList">
    <RenderFriends />
  </div>
</template>
