<script setup>
const vHighlight = {
  mounted: (el) => {
    el.classList.add('is-highlight');
  },
};

// 只有当所需功能只能通过直接操作DOM来实现时，才应该使用自定义指令。
const vFocus = {
  mounted: (el) => el.focus(),
};

const vFormatDiv = {
  mounted: (el, binding) => {
    // console.log(el, '指令绑定的元素');
    console.log(binding, '对象');
    el.style.fontSize = `${binding.value}rem`;
    el.style.fontStyle = 'italic';
    el.style.color = binding.arg || 'black';
    el.style.border = `${binding.value}px solid black`;
  },
};

// shorthand，会在 mounted 和 updated 时都调用
const vLargeText = (el, binding) => (el.style.fontSize = `${binding.value}rem`);
</script>
<template>
  <p v-highlight>这句话很重要</p>
  <p v-italic>这句话使用了全局自定义指令，定义在main.js中</p>
  <label for="test">使用了获取焦点的自定义指令</label>
  <input name="test" v-focus />
  <div v-format-div:pink="2.5">使用一个简单的自定义指令</div>
  <p v-large-text="4">使用自定义指令的简化形式</p>
</template>
<style>
.is-highlight {
  color: blue;
}
</style>
