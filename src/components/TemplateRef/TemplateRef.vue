<script setup>
import ChildRef from './ChildRef.vue';
import { useTemplateRef, onMounted } from 'vue';
const nameInput = useTemplateRef('name');
const refOnChild = useTemplateRef('child'); // the reference is a component instance
const myRefFunction = (el) => {
  console.log(el.textContent);
  el.textContent = '将一个函数绑定给ref属性，会在每次组件更新时调用';
};

// 组件挂载后才能访问模板引用 挂载前是null/undefined
console.log('nameInput value before mount: ', nameInput.value);
onMounted(() => {
  console.log(nameInput.value); // dom元素输入框
  // nameInput.value.focus();
  nameInput.value.value = 'default name';
  console.log(refOnChild.value);
  const { count, increment, decrement } = refOnChild.value;
  console.log(count, increment, decrement); // 只能获取初始值，如果需要监听？遇到再说
});
</script>
<template>
  <div class="card">
    <h2>12.Template Ref</h2>
    <input type="text" ref="name" />
    <h3 :ref="myRefFunction">函数refs</h3>
    <h3>refs on component</h3>
    <ChildRef ref="child" />
  </div>
</template>
