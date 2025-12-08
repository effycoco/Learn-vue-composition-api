<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { debounce } from '@/assets/utils';
const username = ref('');
const userProfile = ref(null);
const error = ref(null);
const getUserProfile = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username.value}`);
    // axios 在状态码不是 2xx 时会自动抛错，所以这里能进到 try 就代表成功
    userProfile.value = response.data;
    console.log(response.data);
    error.value = null;
  } catch (err) {
    userProfile.value = null;
    console.error('Error fetching data: ', err);
    if (err.response) {
      // 请求成功发送，但服务器返回错误
      const message = err.response.data?.message || 'Unkown error';
      error.value = `Error: ${message}`;
    } else {
      //  网络错误，请求没有到达服务器 or 其他错误
      error.value = 'An error occurred while fetching data.';
    }
  }
};

const getUserProfileDebounced = debounce(() => getUserProfile(), 300);
</script>
<template>
  <div class="card">
    <h2 class="title">Github User Profile Viewer</h2>
    <div class="input-container">
      <input
        name="username"
        v-model="username"
        placeholder="Enter Github username"
        @input="getUserProfileDebounced"
      />
    </div>
    <div v-if="userProfile" class="user-profile">
      <img :src="userProfile.avatar_url" :alt="userProfile.login" />
      <div class="user-details">
        <p><strong>Name: </strong>{{ userProfile.login || '/' }}</p>
        <p><strong>Location: </strong>{{ userProfile.location || '/' }}</p>
        <p><strong>Followers: </strong>{{ userProfile.followers || '/' }}</p>
        <p><strong>Following: </strong>{{ userProfile.following || '/' }}</p>
        <p><strong>Public Repos: </strong>{{ userProfile.public_repos || '/' }}</p>
      </div>
      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.input-container {
  margin-bottom: 20px;
}
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  outline: none;
  transition: 0.2s;
}
.input:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.25);
}
.user-profile {
  margin-top: 20px;
}
/* h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
} */
img {
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.user-details {
  text-align: left;
}
p {
  font-size: 16px;
  margin-bottom: 10px;
}
.error-message {
  color: #e74c3c;
  margin-top: 20px;
}
</style>
