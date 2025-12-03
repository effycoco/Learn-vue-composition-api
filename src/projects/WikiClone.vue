<script setup>
import { ref } from 'vue';
import axios from 'axios';

const isDarkTheme = ref(false);
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};

const searchQuery = ref('');
const searchResults = ref([]);
const isLoading = ref(false);
const error = ref('');
const searchWiki = async (query) => {
  const encodeQuery = encodeURIComponent(query);
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query¥list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodeQuery}`;
  try {
    isLoading.value = true;
    const response = await axios.get(endpoint);
    const data = response.data;

    // 1 先检查是否返回业务错误
    if (data.error) {
      throw Error(data.error.info || 'Unknown API Error');
    }
    // 2 再检查正常结果
    if (data.query && Array.isArray(data.query.search)) {
      searchResults.value = data.query.search;
      error.value = null;
    } else {
      searchResults.value = [];
      error.value = 'No results found.';
    }
  } catch (err) {
    console.error(err);

    searchResults.value = [];

    // 3 axios的 HTTP 错误
    if (err.response) {
      error.value = `HTTP Error: ${err.response.status}`;
    }
    // 4 API 自己的业务错误 （上面throw的）
    else if (err.message) {
      error.value = err.message;
    }
    // 5 网络错误 / 其他错误
    else {
      error.value = 'An error occured while fetching data';
    }
  } finally {
    isLoading.value = false;
  }
};
const submitSearch = () => {
  if (searchQuery.value.trim()) {
    searchWiki(searchQuery.value);
  } else {
    searchResults.value = [];
    error.value = 'Please enter a valid search term';
  }
};
</script>

<template>
  <div :class="{ 'dark-theme': isDarkTheme }">
    <div class="container">
      <div class="header-container">
        <h1>Search Wikipedia</h1>
        <span id="theme-toggler" @click="toggleTheme">{{ isDarkTheme ? 'Light' : 'Dark' }}</span>
      </div>
      <form @submit.prevent="submitSearch" class="search-form">
        <input
          type="text"
          v-model="searchQuery"
          id="search-input"
          placeholder="Enter search term"
        />
        <button type="submit">Search</button>
      </form>
      <div id="search-results">
        <div class="spinner" v-if="isLoading">Loading...</div>
        <p v-if="error">{{ error }}</p>
        <div v-if="searchResults.length">
          <div v-for="item in searchResults" :key="item.pageid" class="result-item">
            <h3 class="result-title">
              <a
                :href="`https://en.wikipedia.org/?curid=${item.pageid}`"
                target="_blank"
                rel="noopener"
                >{{ item.title }}</a
              >
            </h3>
            <a class="result-link" :href="`https://en.wikipedia.org/?curid=${item.pageid}`">{{
              `https://en.wikipedia.org/?curid=${item.pageid}`
            }}</a>
            <p class="result-snippet" v-html="item.snippet"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
#search-input {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  flex-grow: 1;
}
#search-input:focus {
  outline: none;
  border-color: #0074d9;
}
button[type='submit'] {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: #0074d9;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
}
button[type='submit']:hover {
  background-color: #0063ad;
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  font-size: 2rem;
}
#search-results {
  margin-bottom: 2rem;
}
.result-item {
  margin-bottom: 1rem;
}
.result-title {
  font-size: 1.5rem;
  margin-top: 0;
}
.result-link {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #0074d9;
  text-decoration: none;
}
.result-link:hover {
  text-decoration: underline;
}
.result-snippet {
  margin-top: 0;
}

/* Dark theme */

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#theme-toggler {
  border: none;
  background: transparent;
  cursor: pointer;
  background: #e2e2e2;
  padding: 10px 20px;
  border-radius: 100px;
}

.dark-theme {
  background-color: #282c34;
  color: #fff;
}
.dark-theme #search-input {
  background-color: #454545;
  color: #fff;
  border-color: #fff;
}

.dark-theme #search-input:focus {
  border-color: #0074d9;
}

.dark-theme button[type='submit'] {
  background-color: #0074d9;
}

.dark-theme .result-link,
.dark-theme .result-link:hover {
  color: #90caf9;
}
</style>
