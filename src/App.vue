<template>
  <div id="app">
    <NavBar />
    <div class="bodyWrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
};
</script>
<style src="./components/style.css"></style>
