<script setup>
import { ref } from 'vue';
let count = ref(0);
function add() {
  count.value++;
  console.log(count.value);
}

function submitHandler(e) {
  e.preventDefault();
  alert('Valid Credentials');
}

function showMessage(msg) {
  alert(msg);
}
</script>
<template>
  <div class="card">
    <h2>2.Event Handlers</h2>
    <p>Count: {{ count }}</p>
    <button @click="add">Add</button>

    <form @submit="submitHandler">
      <input type="text" placeholder="请输入用户名" />
      <input type="text" placeholder="请输入邮箱" />
      <button type="submit">提交</button>
    </form>

    <button @click="showMessage('这是我的信息')">显示信息</button>
  </div>
</template>
