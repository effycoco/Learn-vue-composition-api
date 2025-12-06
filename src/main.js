import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/base.css';
const app = createApp(App);
app.directive('italic', {
  mounted: (el) => {
    el.classList.add('is-italic');
  },
});
app.use(router).mount('#app');
