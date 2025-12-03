import { createApp } from 'vue';
import App from './App.vue';

import './assets/base.css';
const app = createApp(App);
app.directive('italic', {
  mounted: (el) => {
    el.classList.add('is-italic');
  },
});
app.mount('#app');
