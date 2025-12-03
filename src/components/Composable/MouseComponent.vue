<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const x = ref(0);
const y = ref(0);
function update(event) {
  x.value = event.pageX;
  y.value = event.pageY;
}
onMounted(() => window.addEventListener('mousemove', update));
onUnmounted(() => window.removeEventListener('mousemove', update));
</script>
<template>
  <h1>Composables 组合式函数</h1>
  <p>下面先是一个使用常规组件的例子</p>
  <p>直接在组件中使用组合式API实现鼠标跟踪功能</p>
  <p>鼠标现在的坐标为：{{ x }}，{{ y }}</p>
  <!-- <p>接下来改用组合式函数实现：</p> -->
</template>
