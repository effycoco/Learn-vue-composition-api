<script setup>
// const props = defineProps(['name', 'first', 'last', 'favNum'])
const props = defineProps({
  writer: {
    type: String,
    validator: (propValue) => {
      return ['车位已满', '糖多令', '乙', '蛋卷'].includes(propValue)
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
})

console.log(props.name)
console.log(props.favNum)
</script>
<template>
  <p>props are immutable</p>
  <h2>Custom Validator</h2>
  <h3>Writer: {{ writer }}</h3>
  <h3>Age: {{ age }}</h3>
  <h3>Password: {{ password }}</h3>
  <h2>Complex validate</h2>
  <h3>loop array</h3>
  <li v-for="(author, index) in authors" :key="index">{{ author }}</li>
  <h3>loop object</h3>
  <li v-for="(value, key) in books" :key="key">{{ key + ': ' + value }}</li>
  <h3>{{ books }}</h3>
  <h2>{{ favNum }}</h2>
  <h2>{{ name }}</h2>
  <h2>{{ first + ' ' + last }}</h2>
</template>
