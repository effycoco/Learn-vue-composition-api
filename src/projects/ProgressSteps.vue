<script setup>
import { ref } from 'vue';

const steps = ref(['第1步', '第2步', '第3步']);
const currentStep = ref(0);

const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) {
    currentStep.value++;
  }
};
const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};
</script>

<template>
  <div class="card">
    <div class="progress-bar">
      <div v-for="(step, index) in steps" :key="index" :class="{ active: index === currentStep }">
        {{ step }}
      </div>
    </div>
    <div class="controls">
      <button @click="prevStep" :disabled="currentStep === 0">上一步</button>
      <button @click="nextStep" :disabled="currentStep === steps.length - 1">下一步</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding-top: 120px;
}
.progress-bar {
  display: flex;
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
}
.progress-bar div {
  flex: 1;
  text-align: center;
  padding: 15px;
  color: #fff;
  position: relative;
  z-index: 1;
}
.progress-bar div:not(:last-child) {
  border-right: 2px solid #fff;
}
.active {
  background-color: #af514c;
}
.controls {
  margin-top: 20px;
  text-align: center;
}
.controls button {
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #673ab7;
  color: #fff;
  border-radius: 5px;
  margin: 0 5px;
  border: none;
}
.controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
