<script setup>
import { ref } from 'vue'
import PropsChild from './PropsChild.vue'
let firstName = ref('Effy')
let lastName = ref('Wang')
let favNum = ref(7)
let authors = ref(['alex', 'john', '车位已满', '乙', '蛋卷'])
let books = ref({ po: '流俗之地', jj: '向导翻车', 豆阅: '春往冬返' })
</script>
<template>
  <PropsChild
    writer="乙"
    :age="19"
    password="whatisapwd"
    :authors="authors"
    :books="books"
    name="Suffie"
    :first="firstName"
    :last="lastName"
    :favNum="favNum"
  />
</template>
