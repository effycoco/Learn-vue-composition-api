<script setup>
import { ref } from 'vue';

const passwordLength = ref(12);
const includeUppercase = ref(true);
const includeNumbers = ref(true);
const includeSymbols = ref(true);
const generatedPassword = ref('');
const generatePassword = () => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = includeUppercase.value ? lowercaseChars.toUpperCase() : '';
  const numbers = includeNumbers.value ? '0123456' : '';
  const symbols = includeSymbols.value ? '!@#$%^&*()_+[]{}|;:,.<>?/~' : '';
  const allChars = lowercaseChars + uppercaseChars + numbers + symbols;
  let password = '';
  for (let i = 0; i < passwordLength.value; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  generatedPassword.value = password;
};
</script>

<template>
  <div class="card">
    <h2 class="title">密码生成器</h2>

    <div class="form-group">
      <label for="length">密码长度</label>
      <input type="number" id="length" v-model="passwordLength" min="4" max="32" class="input" />
    </div>

    <div class="form-group checkbox-group">
      <label class="checkbox-item">
        <input type="checkbox" v-model="includeUppercase" />
        <span>包含大写字母</span>
      </label>

      <label class="checkbox-item">
        <input type="checkbox" v-model="includeNumbers" />
        <span>包含数字</span>
      </label>

      <label class="checkbox-item">
        <input type="checkbox" v-model="includeSymbols" />
        <span>包含符号</span>
      </label>
    </div>

    <button @click="generatePassword" class="button-primary">生成密码</button>

    <div v-if="generatedPassword" class="password-display">
      <div class="password-label">已生成密码</div>
      <div class="password-text">{{ generatedPassword }}</div>
    </div>
  </div>
</template>

<style scoped>
/* ---- 基础布局 ---- */
.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ---- 标题 ---- */
.title {
  font-weight: 600;
  text-align: center;
}

/* ---- 输入框 ---- */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input {
  padding: 10px 12px;
  font-size: 15px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  outline: none;
  transition: 0.2s;
}
.input:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.25);
}

/* ---- 复选框组 ---- */
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
}

/* ---- 按钮 ---- */
.button-primary {
  padding: 12px;
  background: #4a90e2;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;
}
.button-primary:hover {
  background: #357acb;
}

/* ---- 密码显示区域 ---- */
.password-display {
  padding: 15px 18px;
  border-radius: 12px;
  background: #f4f6f8;
  border: 1px solid #e1e5ea;
}

.password-label {
  font-size: 14px;
  color: #777;
  margin-bottom: 6px;
}

.password-text {
  font-size: 18px;
  font-family: monospace;
  color: #333;
  word-break: break-all;
}
</style>
