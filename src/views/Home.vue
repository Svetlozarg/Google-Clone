<template>
  <main>
    <div class="home">
      <Navbar />

      <div class="home-body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          alt=""
        />
        <div class="home-input-container">
          <div class="search-input">
            <img
              class="input-icon"
              src="../assets/search.png"
              alt=""
              style="cursor: default"
            />
            <input type="text" v-model="searchText" @keyup.enter="search()" />
          </div>

          <div class="search-buttons">
            <button style="cursor: pointer" @click="search()">
              Google Search
            </button>
            <button style="cursor: pointer">I'm feeling lucky</button>
          </div>
          <h4 class="credit">Created by Svetlozar Georgiev</h4>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import router from "../router";
import Navbar from "../components/Navbar";

export default {
  setup() {
    let searchText = ref("");

    function search() {
      if (searchText.value != "") {
        localStorage.setItem("query", searchText.value);
        router.push("/search");
      }
    }

    return {
      searchText,
      Navbar,
      search,
    };
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.home-body {
  flex: 1;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
}
.home-body > img {
  object-fit: contain;
  height: 100px;
}
.search-input {
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 50px;
  padding: 10px 20px;
  border-radius: 999px;
  width: 75vw;
  margin: 0 auto;
  margin-top: 40px;
  max-width: 560px;
}
.search-input > input {
  flex: 1;
  padding: 10px 20px;
  font-size: medium;
  border: none;
}
.search-input > input:focus {
  outline-width: 0;
}
.input-icon {
  object-fit: contain;
  width: 20px;
  cursor: pointer;
}
.search-buttons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.search-buttons > button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border: 1px solid white;
  text-transform: inherit;
  color: #5f6368;
}
.search-buttons > button:hover {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
  background-color: #f8f8f8;
  border: 1px solid #c6c6c6;
  color: #222;
}
.credit {
  margin: 0 auto;
  text-align: center;
  margin-top: 10%;
  color: gray;
  font-size: small;
}
</style>