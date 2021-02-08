<template>
  <main>
    <div class="search-page">
      <!-- Seach Header -->
      <div class="search-header">
        <router-link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            alt=""
            style="object-fit: contain; height: 50px; margin-right: 50px"
          />
        </router-link>
        <div class="search-header-body">
          <div class="search-input-search">
            <img
              class="input-icon"
              src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/3650895391548336152-512.png"
              alt=""
              style="cursor: default"
            />
            <input
              v-model="searchText"
              @keypress.enter="fetchResponseData(searchText)"
              id="searchBar"
              type="text"
            />
            <img
              class="input-icon"
              src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/13586174781580594410-512.png"
              alt=""
            />
          </div>
          <div class="search-options">
            <div class="option-left">
              <div class="option">
                <img src="../assets/search.png" alt="" class="icon-search" />
                <h4>All</h4>
              </div>
              <div class="option">
                <img src="../assets/images.png" alt="" class="icon-search" />
                <h4>Images</h4>
              </div>
              <div class="option">
                <img src="../assets/news.png" alt="" class="icon-search" />
                <h4>News</h4>
              </div>
              <div class="option">
                <img src="../assets/map.png" alt="" class="icon-search" />
                <h4>Maps</h4>
              </div>
              <div class="option">
                <img src="../assets/video.png" alt="" class="icon-search" />
                <h4>Videos</h4>
              </div>
              <div class="option">
                <img src="../assets/more.png" alt="" class="icon-search" />
                <h4>More</h4>
              </div>
            </div>
            <div class="option-right">
              <div class="option">
                <h4>Settings</h4>
              </div>
              <div class="option">
                <h4>Tools</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Search Body -->
      <div v-if="!loading && results != null">
        <div class="search-result">
          <p class="search-count">
            About {{ resultsInfo.formattedTotalResults }} results ({{
              resultsInfo.formattedSearchTime
            }}
            seconds) for {{ querry }}
          </p>
        </div>

        <div
          class="search-page-results"
          v-for="result in results"
          :key="result.id"
        >
          <a :href="result.link">
            {{ result.displayLink }}
          </a>
          <a class="search-title" :href="result.link">
            <h2>{{ result.title }}</h2>
          </a>
          <p class="search-snippet">{{ result.snippet }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import router from "../router";
import fetchResponse from "../hooks/API";

export default {
  setup() {
    const querry = localStorage.getItem("query");

    let loading = ref(true);
    let resultsInfo = ref();
    let results = ref();
    let searchText = ref();

    onMounted(() => {
      loading.value = true;

      if (querry != null) {
        setTimeout(() => {
          searchText.value = querry;
          fetchResponseData(searchText.value);
          loading.value = false;
        }, 100);
      } else {
        router.push("/");
      }
    });

    async function fetchResponseData(querry) {
      loading.value = true;
      let resultObj = [];
      resultObj = await fetchResponse(querry);

      resultsInfo.value = resultObj.searchInformation;

      let resultArray = [];
      for (let item of resultObj.items) {
        resultArray.push(item);
      }
      results.value = resultArray;

      setTimeout(() => {
        loading.value = false;
      }, 100);
    }

    return {
      querry,
      loading,
      fetchResponseData,
      results,
      resultsInfo,
      searchText,
    };
  },
};
</script>

<style>
.search-page {
  width: 100vw;
}
.search-input-search {
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 50px;
  padding: 10px 20px;
  border-radius: 999px;
  width: 100%;
  max-width: unset;
  margin: unset;
  margin-top: 0;
  margin-bottom: 4%;
}
.search-input-search > input {
  flex: 1;
  padding: 10px 20px;
  font-size: medium;
  border: none;
}
.search-input-search > input:focus {
  outline-width: 0;
}
.input-icon {
  object-fit: contain;
  width: 20px;
  cursor: pointer;
}
.search-header {
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  align-items: flex-start;
  padding: 20px 30px;
  border-bottom: 1px solid lightgray;
}
.search-options {
  display: flex;
  align-items: center;
  color: gray;
}
.option-left,
.option-right {
  display: flex;
  flex-direction: row;
}
.option-left h4,
.option-right h4 {
  text-decoration: none;
  color: rgb(104, 104, 104);
}
.option-right {
  margin-left: 80px;
}
.option {
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}
.option h4 {
  margin-left: 5px;
  font-size: 0.8rem;
}
.icon-search {
  object-fit: contain;
  width: 20px;
}
.search-result {
  margin: 10px 0px 40px 0;
}
.search-count {
  color: #70757a;
  font-size: 14px;
  margin-left: 240px;
}
.search-page-results {
  max-width: 650px;
  margin-top: 20px;
  margin-left: 240px;
  margin-bottom: 30px;
}
.search-title {
  text-decoration: none;
  margin-top: 5px;
}
.search-title:hover {
  text-decoration: underline;
}
.search-title > h2 {
  font-weight: 500;
}
.search-snippet {
  margin-top: 5px;
}
.search-page-image {
  object-fit: contain;
  height: 20px;
  widows: 20px;
  margin-right: 10px;
}
</style>