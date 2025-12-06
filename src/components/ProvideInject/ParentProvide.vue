<script setup>
import { provide } from 'vue';
import ChildInject from './ChildInject.vue';
provide('friends', ['Alex', 'Jordan', 'HuXn', 'John']);
provide('game', {
  id: 1,
  title: 'Epic Adventure Game',
  genre: ['Action', 'Adventure', 'RPG'],
  platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
  releaseDate: '2022-03-15',
  developer: {
    name: 'Awesome Game Studios',
    location: 'San Francisco, CA',
    teamSize: 50,
  },
});
provide('moreGames', [
  {
    title: 'Space Explorer',
    genre: 'Sci-Fi',
    platform: 'PC',
    releaseDate: '2023-05-20',
  },
  {
    title: 'Fantasy Quest',
    genre: 'Fantasy',
    platform: 'PlayStation',
    releaseDate: '2023-07-10',
  },
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    releaseDate: '2010-07-16',
  },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'Drama',
    releaseDate: '1994-09-23',
  },
]);
</script>
<template>
  <div class="card">
    <h2>9.Provide&Inject</h2>
    <h3>Parent Provide Datas</h3>
    <ChildInject />
  </div>
</template>
