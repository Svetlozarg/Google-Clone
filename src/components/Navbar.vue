<template>
  <main>
    <div class="home-header">
      <div class="home-header-left">
        <router-link class="header-link" to="/">About</router-link>
        <router-link class="header-link" to="/">Store</router-link>
      </div>
      <div class="home-header-right">
        <router-link class="header-link" to="/">Gmail</router-link>
        <router-link class="header-link" to="/">Images</router-link>
        <img src="../assets/apps.png" alt="" class="icon-menu" />
        <img src="../assets/avatar.png" alt="" class="icon" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>
.icon {
  width: 35px;
  object-fit: contain;
  margin-right: 20px;
  cursor: pointer;
}
.icon-menu {
  width: 25px;
  object-fit: contain;
  margin-right: 20px;
  cursor: pointer;
}
.home-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
}
.header-link {
  margin-right: 20px;
  text-decoration: inherit;
  color: rgba(0, 0, 0, 0.87);
  font-size: 15px;
  cursor: pointer;
}
.header-link:hover {
  text-decoration: underline;
}
.home-header-right {
  display: flex;
  align-items: center;
  min-width: 13vw;
  justify-content: space-between;
}
</style>