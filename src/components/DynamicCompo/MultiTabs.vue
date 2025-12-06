<script setup>
import { ref } from 'vue';
import Home from './HomeTab.vue';
import Posts from './PostsTab.vue';
import Archive from './ArchiveTab.vue';

const currentTab = ref('Home');
const tabs = { Home, Posts, Archive };
</script>
<template>
  <div class="card">
    <h2>16.Dynamic Components</h2>
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      @click="currentTab = tab"
      :class="['tab-button', { active: currentTab === tab }]"
    >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>
<style>
.tab-button {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: -1px;
  margin-bottom: -1px;
  cursor: pointer;
}
.tab-button:hover {
  background-color: #e0e0e0;
}
.tab-button.active {
  background-color: #e0e0e0;
}
.tab {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
