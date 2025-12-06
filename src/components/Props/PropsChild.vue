<script setup>
// const props = defineProps(['name', 'first', 'last', 'favNum'])
const props = defineProps({
  writer: {
    type: String,
    validator: (propValue) => {
      return ['车位已满', '糖多令', '乙', '蛋卷'].includes(propValue);
    },
  },
  age: {
    type: Number,
    validator: (propValue) => propValue >= 18,
  },
  password: {
    type: String,
    validator: (val) => val.length >= 8,
  },
  authors: Array,
  books: Object,
  name: {
    type: String,
    required: true,
    default: 'Anonymous',
  },
  first: String,
  last: String,
  favNum: Number,
});

console.log(props.name);
console.log(props.favNum);
</script>
<template>
  <p>props are immutable</p>
  <p>Custom Validator</p>
  <p>Writer: {{ writer }}</p>
  <p>Age: {{ age }}</p>
  <p>Password: {{ password }}</p>
  <p>Complex validate</p>
  <p>loop array</p>
  <li v-for="(author, index) in authors" :key="index">{{ author }}</li>
  <p>loop object</p>
  <li v-for="(value, key) in books" :key="key">{{ key + ': ' + value }}</li>
  <p>{{ books }}</p>
  <p>{{ favNum }}</p>
  <p>{{ name }}</p>
  <p>{{ first + ' ' + last }}</p>
</template>
