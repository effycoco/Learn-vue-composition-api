<script setup>
import { ref } from 'vue';
const userInfo = ref({
  name: 'effy',
  location: ['beijing', 'shanghai'],
});
const friends = ref(['susan', 'joey', 'eric']);

let state = ref({ val: { count: 0 }, user: ['effy', 'susan'] });

let another = ref({ count: 0 });
</script>
<template>
  <div class="card">
    <h2>3.Reactivity & Reactive 响应性</h2>
    <p>Location: {{ userInfo.location }}</p>
    <button @click="userInfo.location.push('guangzhou')">change Location</button>

    <p>1. {{ friends[0] }}</p>
    <button @click="friends[0] = 'michel'">Hands Shake</button>

    <p>Current Count: {{ state.val.count }}</p>
    <p>Users: {{ state.user }}</p>
    <button @click="state.val.count += 10">Add 10</button>
    <button @click="state.user = ['eric', 'tom']">Change Users</button>

    <p>Count: {{ another.count }}</p>
    <button @click="another.count++">add</button>
    <button @click="another.count--">minus</button>
  </div>
</template>
