<script setup>
import { ref } from 'vue';
const items = ref([
  {
    title: 'What is HTML?',
    content:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
    open: false,
  },
  {
    title: 'What is CSS?',
    content:
      'Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    open: false,
  },
  {
    title: 'What is JS?',
    content:
      'JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',
    open: false,
  },
]);
const toggleAccordion = (index) => {
  items.value = items.value.map((item, i) => ({ ...item, open: i === index ? !item.open : false }));
};
</script>
<template>
  <div class="card">
    <div v-for="(item, index) in items" :key="index" class="accordion">
      <button @click="toggleAccordion(index)" class="accordion-header">
        {{ item.title }}
        <span class="arrow-icon">{{ item.open ? '▼' : '▶' }}</span>
      </button>
      <div v-show="item.open" class="accordion-content">{{ item.content }}</div>
    </div>
  </div>
</template>
<style scoped>
.card {
  max-width: 500px;
}
.accordion {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}
.accordion-header {
  /* all: unset; */
  width: 100%;
  font-size: 18px;
  background-color: #3498db;
  color: #fff;
  padding: 15px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.arrow-icon {
  font-size: 20px;
}
.accordion-content {
  padding: 15px;
  /* display: none; */
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
  color: #333;
  font-size: 16px;
}
</style>
