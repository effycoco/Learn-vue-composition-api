<script setup>
import { ref, onMounted } from 'vue';

const newTask = ref('');
const tasks = ref([]);
const error = ref('');
const baseURL = 'https://todo-list-6e451-default-rtdb.firebaseio.com/todos';

function showError(msg) {
  error.value = msg;
  setTimeout(() => (error.value = ''), 3000);
}
const loadTasks = async () => {
  tasks.value = []; // 清空旧数据避免越来越多
  try {
    const res = await fetch(`${baseURL}.json`);

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt || `加载失败：HTTP${res.status}`);
    }

    const data = await res.json();
    for (let key in data) {
      tasks.value.push({ id: key, text: data[key].text });
    }
  } catch (err) {
    showError('加载错误：' + err.message);
  }
};

const addTask = async () => {
  const text = newTask.value;
  const payload = { text };
  try {
    const res = await fetch(`${baseURL}.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('无法添加待办');
    const data = await res.json();
    tasks.value.push({ id: data.name, text });
    newTask.value = '';
  } catch (err) {
    console.log(err);
    showError('添加失败：' + err.message);
  }
};

const removeTask = async (id) => {
  const index = tasks.value.findIndex((task) => task.id === id);
  if (index === -1) return;

  const [removedTask] = tasks.value.splice(index, 1);

  try {
    const res = await fetch(`${baseURL}/${id}.json`, { method: 'DELETE' });
    if (!res.ok) throw new Error('无法删除待办');
  } catch (err) {
    console.log(err);
    if (removedTask) tasks.value.splice(index, 0, removedTask);
    showError('删除错误：' + err.message);
  }
};

onMounted(loadTasks);
</script>

<template>
  <div class="card">
    <h2 class="title">待办列表</h2>
    <div v-if="error" class="error-box">
      {{ error }}
    </div>
    <form class="task-input" @submit.prevent="addTask">
      <input v-model.trim="newTask" required placeholder="添加待办事项" />
      <button>添加</button>
    </form>

    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        {{ task.text }}
        <button @click="removeTask(task.id)" class="remove-button">删除</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
}
.error-box {
  background-color: #f44336;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.task-input {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
  font-size: 14px;
}

button {
  padding: 8px 12px;
  font-size: 14px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.task-list {
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 8px 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.task-item:last-child {
  margin-bottom: 0;
}

.remove-button {
  padding: 6px 10px;
  font-size: 12px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #c0392b;
}
</style>
