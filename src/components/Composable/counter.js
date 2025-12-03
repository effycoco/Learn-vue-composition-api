import { ref } from 'vue';
export function useCounter(initialVal = 0) {
  const count = ref(initialVal);
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }
  return { count, increment, decrement };
}
