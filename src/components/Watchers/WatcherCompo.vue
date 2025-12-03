<script setup>
import { watch, ref, reactive } from 'vue';
const state = reactive({ username: 'Effy' });
const count = ref(0);
const msg = ref('');
// watch(count, (newVal, oldVal) => {
//   console.log(newVal);
//   console.log(oldVal);
// });
watch([count, msg], (val, oldVal) => {
  console.log(`changed from ${oldVal} to ${val}`);
});
// Here we can't provide specific property of object
// - we have to provide the entire object, otherwise it's gonna give us error in the console.
// If we're using "object" both the new & the old values will be the same
// Now if we want to get the "old" & the "new" values separately,
// - for that we'll have to pass a getter function.
// - & here we have to specify the actual object/state "property".
watch(
  () => state.username,
  (val, oldVal) => {
    console.log(val);
    console.log(oldVal);
  },
);
</script>
<template>
  <h1>Watchers</h1>
  <span>{{ state.username }}</span> <button @click="state.username = 'Sally'">Change Name</button>
  <p>{{ count }}</p>
  <button @click="count++">increment</button>
  <p>{{ msg }}</p>
  <input type="text" v-model="msg" placeholder="type something..." />
</template>
