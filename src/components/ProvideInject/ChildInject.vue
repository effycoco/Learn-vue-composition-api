<script setup>
import { inject } from 'vue';
const friends = inject('friends');
const game = inject('game');
const moreGames = inject('moreGames');
</script>
<template>
  <h2>Inject to Child</h2>
  <ul>
    <li v-for="(name, i) in friends" :key="i">{{ name }}</li>
  </ul>
  <ul>
    <li v-for="(value, key) in game" :key="key">{{ key }} : {{ value }}</li>
  </ul>
  <ul v-for="(game, i) in moreGames" :key="i">
    <li v-for="(value, property) in game" :key="property">
      {{ `${property}: ${value}` }}
    </li>
  </ul>
</template>
