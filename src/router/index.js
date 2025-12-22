import { createRouter, createWebHistory } from 'vue-router';
import ProjectsDisplay from '@/pages/ProjectsDisplay.vue';
import BasicConcepts from '@/pages/BasicConcepts.vue';
import GridPlayground from '@/pages/GridPlayground.vue';

const routes = [
  { path: '/', component: ProjectsDisplay },
  { path: '/basics', component: BasicConcepts },
  { path: '/grid', component: GridPlayground },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
