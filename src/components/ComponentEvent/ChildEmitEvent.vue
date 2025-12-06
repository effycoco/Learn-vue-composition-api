<script setup>
import { ref } from 'vue';
const username = ref('');
const email = ref('');
const pwd = ref('');
</script>

<template>
  <div class="card">
    <h2>7.Event Emits / Component Event</h2>
    <form @submit.prevent="$emit('userInfo', username, email, pwd)">
      <input name="name" type="text" placehoulder="用户名" v-model="username" />
      <input name="email" type="email" placehoulder="邮箱" v-model="email" />
      <input name="password" type="password" placehoulder="密码" v-model="pwd" />
      <button type="submit">提交</button>
    </form>
  </div>
</template>
