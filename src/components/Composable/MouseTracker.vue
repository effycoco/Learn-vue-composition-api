<script setup>
import { useMouse } from './mouse.js';
const { x, y } = useMouse();
// import { x, y } from './mouse.js';
</script>
<template>
  <p>
    如果想在多个组件中复用同一逻辑，可以把这个逻辑以一个组合式函数的形式提取到外部js文件中。然后在组件中使用组合式函数
  </p>
  <p>当前鼠标坐标为：{{ x }}，{{ y }}</p>
</template>
