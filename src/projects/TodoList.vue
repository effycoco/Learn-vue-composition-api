<script setup>
import { ref, onMounted } from 'vue';

const newTask = ref('');
const tasks = ref([]);
const loadError = ref('');
const baseURL = 'https://todo-list-6e451-default-rtdb.firebaseio.com/todos';
onMounted(() => {
  loadTasks();
});
const loadTasks = async () => {
  try {
    const res = await fetch(`${baseURL}.json`);
    if (!res.ok) throw new Error('网络请求失败');
    const data = await res.json();
    for (let key in data) {
      tasks.value.push({ id: key, text: data[key].text });
    }
  } catch (err) {
    loadError.value = `加载数据出错：${err}`;
  }
};

const addTask = async () => {
  let current = { text: newTask.value };
  try {
    const res = await fetch(`${baseURL}.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(current),
    });
    if (!res.ok) throw new Error('无法存储数据');
    newTask.value = '';
    loadTasks();
    // const data = await res.json() // 返回服务器生成current对象的key/id，暂时没用，但如果想改成本地局部更新列表而不是重新获取整个列表，减少get请求，会用到
    // console.log(data)
  } catch (err) {
    console.error('添加失败：', err);
  }
};

const removeTask = async (id) => {
  try {
    const res = await fetch(`${baseURL}/${id}.json`, { method: 'DELETE' });
    if (!res.ok) throw new Error('删除失败');
    loadTasks();
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <div class="card">
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
.card {
  padding: 36px 28px;
}
.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
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
