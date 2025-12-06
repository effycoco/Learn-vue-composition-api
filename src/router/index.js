import { createRouter, createWebHistory } from 'vue-router';
import ProjectsDisplay from '@/pages/ProjectsDisplay.vue';
import BasicConcepts from '@/pages/BasicConcepts.vue';

const routes = [
  { path: '/', component: ProjectsDisplay },
  { path: '/basics', component: BasicConcepts },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
