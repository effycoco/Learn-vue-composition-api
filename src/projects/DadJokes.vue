<script setup>
import { ref } from 'vue';
import axios from 'axios';

const joke = ref(null);

const fetchJoke = async () => {
  try {
    const response = await axios.get('https://icanhazdadjoke.com', {
      headers: { Accept: 'application/json' },
    });
    joke.value = response.data.joke;
  } catch (error) {
    console.error('Error fetching dad joke:', error);
  }
};
</script>
<template>
  <div class="card">
    <h2 class="title">Dad Jokes</h2>
    <button @click="fetchJoke">Get Dad Joke</button>
    <div class="dad-joke" v-if="joke">{{ joke }}</div>
  </div>
</template>
<style scoped>
.card {
  /* text-align: center; */
}
.title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}
button {
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
}
button:hover {
  background-color: #45a049;
}
.dad-joke {
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  background-color: #f9f9f9;
  color: #333;
}
</style>
