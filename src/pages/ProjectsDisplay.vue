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
  <router-link to="/basics">基础概念</router-link>
</template>
