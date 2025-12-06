<script setup>
import { ref } from 'vue';
const people = ref(['alice', 'eric', 'susan']);
const movies = ref([
  {
    Description:
      'An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.',
    Director: 'Frank Capra',
    Duration: '2h 10m',
    Image:
      'https://m.media-amazon.com/images/M/MV5BMDM4OWFhYjEtNTE5Yy00NjcyLTg5N2UtZDQwNDZlYjlmNDU5XkEyXkFqcGc@._V1_QL75_UY207_CR1,0,140,207_.jpg',
    'Image Alt': "James Stewart and Donna Reed in It's a Wonderful Life (1946)",
    Metascore: '89',
    'Movie Link': 'https://www.imdb.com/title/tt0038650/?ref_=ls_i_1',
    Position: '2',
    Rating: '8.6',
    Stars: 'James Stewart',
    Title: "1. It's a Wonderful Life",
    Votes: '(511K)',
    Year: '1946',
  },
  {
    Description:
      'A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.',
    Director: 'John McTiernan',
    Duration: '2h 12m',
    Image:
      'https://m.media-amazon.com/images/M/MV5BMGNlYmM1NmQtYWExMS00NmRjLTg5ZmEtMmYyYzJkMzljYWMxXkEyXkFqcGc@._V1_QL75_UX140_CR0,1,140,207_.jpg',
    'Image Alt': 'Bruce Willis in Die Hard (1988)',
    Metascore: '72',
    'Movie Link': 'https://www.imdb.com/title/tt0095016/?ref_=ls_i_2',
    Position: '3',
    Rating: '8.2',
    Stars: 'Bruce Willis',
    Title: '2. Die Hard',
    Votes: '(966K)',
    Year: '1988',
  },
  {
    Description:
      'Ebenezer Scrooge, a curmudgeonly, miserly businessman, has no time for sentimentality and largely views Christmas as a waste of time. However, this Christmas Eve, he will be visited by three spirits who will show him the error of his ways.',
    Director: 'Brian Desmond Hurst',
    Duration: '1h 26m',
    Image:
      'https://m.media-amazon.com/images/M/MV5BNTlmMzgzNTctOWY0ZS00M2Q2LTk5NjYtM2ZiNTFjZTBjYzM0XkEyXkFqcGc@._V1_QL75_UX140_CR0,2,140,207_.jpg',
    'Image Alt': 'A Christmas Carol (1951)',
    Metascore: '',
    'Movie Link': 'https://www.imdb.com/title/tt0044008/?ref_=ls_i_3',
    Position: '4',
    Rating: '8.1',
    Stars: 'Alastair Sim',
    Title: '3. A Christmas Carol',
    Votes: '(26K)',
    Year: '1951',
  },
]);

const games = ref({
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
  ratings: {
    metacritic: 90,
    user: 4.8,
  },
  features: {
    singlePlayer: true,
    multiplayer: true,
    onlineCoop: true,
    splitScreen: false,
  },
  systemRequirements: {
    minimum: {
      os: 'Windows 10',
      processor: 'Intel Core i5',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 970',
      storage: '50 GB available space',
    },
    recommended: {
      os: 'Windows 11',
      processor: 'Intel Core i7',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 3080',
      storage: '100 GB available space',
    },
  },
  storyline: 'Embark on a thrilling adventure to save the world from impending doom!',
  characters: ['Hero', 'Sidekick', 'Villain', 'NPCs'],
  achievements: [
    { id: 1, name: 'Master Explorer', description: 'Explore every corner of the game world' },
    {
      id: 2,
      name: 'Legendary Warrior',
      description: 'Complete the game on the hardest difficulty',
    },
  ],
});

const complexGamesObj = ref({
  game1: {
    title: 'Space Explorer',
    genre: 'Sci-Fi',
    platform: 'PC',
    releaseDate: '2023-05-20',
  },
  game2: {
    title: 'Fantasy Quest',
    genre: 'Fantasy',
    platform: 'PlayStation',
    releaseDate: '2023-07-10',
  },
  movie1: {
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    releaseDate: '2010-07-16',
  },
  movie2: {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'Drama',
    releaseDate: '1994-09-23',
  },
  book1: {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    publicationYear: 1965,
  },
  book2: {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publicationYear: 1960,
  },
});
</script>
<template>
  <div class="card wide-card">
    <h2>5.List Rendering</h2>
    <p>
      <code> v-for </code> 可以遍历对象的键值对，
      <code> v-for="(value, keys, index) in obj" </code>
      。要注意第一个参数是值，第二个参数是键，第三个参数是index。
    </p>
    <ul v-for="(value, keys, index) in games" :key="keys">
      {{
        index
      }}.{{
        keys
      }}
      ➡️
      {{
        value
      }}
    </ul>

    <p>遍历对象也可以只取values忽略keys, <code> v-for="(value, index) in obj" </code></p>

    <ul v-for="(game, index) in complexGamesObj" :key="index">
      <li>{{ game }}</li>
      <br />
      <li v-for="(value, property, i) in game" :key="i">{{ property }} ➡️ {{ value }}</li>
    </ul>

    <pre>
   可使用 <code>
      v-for="num in 5"
    </code> 指定循环次数，num 为 1-5
  </pre>
    <ul v-for="num in 5" :key="num">
      <li>{{ num }}</li>
    </ul>
    <ul v-for="({ Title, Rating, Stars }, index) in movies" :key="index">
      <li>Title: {{ Title }}</li>
      <li>Rating: {{ Rating }}</li>
      <li>Stars: {{ Stars }}</li>
    </ul>

    <p>JS中推荐用 for...of 遍历数组中的值，用for...in遍历对象的属性名（key）。</p>
    <p>
      Vue 的
      <code> v-for="(item, index) in arr" </code>
      的语法和 JavaScript 的 for...in 并没有直接关系，它只是 Vue 自己定义的一种模板语法。和
      <code> arr.forEach((item, index) => { ... }) </code>
      逻辑是一样的。
    </p>
    <h3 v-for="(person, index) in people" :key="index">
      {{ index + '.' + person }}
    </h3>
  </div>
</template>

<style scoped>
.card {
  max-width: 800px;
}
</style>
