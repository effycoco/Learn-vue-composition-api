<script setup>
import { ref, onMounted } from 'vue';
const quotes = ref([
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
]);

const currentQuote = ref({ text: '', author: '' });

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.value.length);
  currentQuote.value = quotes.value[randomIndex];
};
onMounted(() => {
  getRandomQuote();
});
</script>
<template>
  <div class="card">
    <h1 class="app-title">Random Quote Generator</h1>
    <blockquote class="quote-container">
      <p>{{ currentQuote.text }}</p>
      <cite>{{ currentQuote.author }}</cite>
    </blockquote>
    <button @click="getRandomQuote" class="quote-button">Get Radom Quote</button>
  </div>
</template>
<style scoped>
.card {
  text-align: center;
}
.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}
.quote-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}
p {
  font-size: 18px;
  margin-bottom: 10px;
}
cite {
  font-style: normal;
  color: #777;
}
.quote-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.quote-button:hover {
  background-color: #2980b9;
}
</style>
