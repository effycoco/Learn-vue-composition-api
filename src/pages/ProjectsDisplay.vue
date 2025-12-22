<script setup>
import WikiClone from '@/projects/WikiClone.vue';
import GithubUsersSearch from '@/projects/GithubUsersSearch.vue';
import DadJokes from '@/projects/DadJokes.vue';
import ProgressSteps from '@/projects/ProgressSteps.vue';
import PasswordGenerator from '@/projects/PasswordGenerator.vue';
import FormValidation from '@/projects/FormValidation.vue';
import AccordionComponent from '@/projects/AccordionComponent.vue';
import Calculator from '@/projects/SimpleCalculator.vue';
import RandomQuoteGenerator from '@/projects/RandomQuoteGenerator.vue';
import TodoList from '@/projects/TodoList.vue';
</script>
<template>
  <div class="container">
    <TodoList />
    <PasswordGenerator />
    <Calculator />
    <GithubUsersSearch />
    <DadJokes />
    <ProgressSteps />
    <FormValidation />
    <AccordionComponent />
    <RandomQuoteGenerator />
  </div>
  <WikiClone />
  <router-link to="/grid" class="nav-link">Grid Playground</router-link>
  <router-link to="/basics" class="nav-link"> Vue Composition API 基础概念</router-link>
</template>
<style scoped>
.nav-link {
  display: inline-block;
  padding: 0.5em 0.8em;
  background-color: #af514c;
  color: #fff;
  line-height: 1.2;
  margin-inline-end: 0.5em;
  text-decoration: none;
}
.nav-link:hover {
  background-color: #cc6b5a;
}
</style>
