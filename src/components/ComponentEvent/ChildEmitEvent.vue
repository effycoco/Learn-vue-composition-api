<script setup>
import { ref } from 'vue';
const username = ref('');
const email = ref('');
const pwd = ref('');
</script>

<template>
  <form @submit.prevent="$emit('userInfo', username, email, pwd)">
    <input name="name" type="text" placehoulder="用户名" v-model="username" />
    <input name="email" type="email" placehoulder="邮箱" v-model="email" />
    <input name="password" type="password" placehoulder="密码" v-model="pwd" />
    <button type="submit">提交</button>
  </form>
</template>
