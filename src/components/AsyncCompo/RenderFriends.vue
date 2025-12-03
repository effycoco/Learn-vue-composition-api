<script setup>
import { ref } from 'vue';
const friends = ref(['车位已满', '黎黎', '蛋卷', '乙']);
</script>
<template>
  <h4 v-for="(friend, index) in friends" :key="index">{{ friend }}</h4>
</template>
