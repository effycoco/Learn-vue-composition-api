<script setup>
import { ref, computed } from 'vue';
const formData = ref({
  name: '',
  email: '',
  password: '',
});
const touched = ref({
  name: false,
  email: false,
  password: false,
});
const isNameValid = computed(() => formData.value.name !== '');
const isEmailValid = computed(() => /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(formData.value.email));
const isPasswordValid = computed(() => formData.value.password.length > 8);
const isFormValid = computed(
  () => isNameValid.value && isEmailValid.value && isPasswordValid.value,
);

const showNameError = computed(() => touched.value.name && !isNameValid.value);
const showEmailError = computed(() => touched.value.email && !isEmailValid.value);
const showPasswordError = computed(() => touched.value.password && !isPasswordValid.value);
const submitForm = () => {
  if (isFormValid.value) {
    console.log('Form submitted!', formData.value);
  } else {
    console.log('Form is invalid. Please check the fields.');
  }
};
</script>
<template>
  <form @submit.prevent="submitForm" class="card">
    <div class="form-group">
      <label for="name">姓名：</label>
      <input type="text" v-model.trim="formData.name" id="name" @blur="touched.name = true" />
      <span v-if="showNameError" class="error">请输入姓名</span>
    </div>
    <div class="form-group">
      <label for="email">邮箱：</label>
      <input type="text" v-model.trim="formData.email" id="email" @blur="touched.email = true" />
      <span v-if="showEmailError" class="error">请输入正确格式的邮箱</span>
    </div>
    <div class="form-group">
      <label for="password">密码：</label>
      <input
        type="password"
        v-model.trim="formData.password"
        id="password"
        @blur="touched.password = true"
      />
      <span v-if="showPasswordError" class="error">密码必须不小于8位</span>
    </div>
    <button type="submit" :disabled="!isFormValid" class="submit-button">提交</button>
  </form>
</template>
<style scoped>
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  /* width: 100%; */
  font-weight: bold;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.error {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
}
.submit-button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
}
.submit-button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
</style>
