<template>
  <div class="container">
    <b-navbar toggleable="sm" type="light" fixed="top" class="navbar">
      <b-navbar-brand
        ><router-link to="/">Legacy App</router-link></b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cards" class="nav-link">Cards</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/settings" class="nav-link">Settings</router-link>
          </li>
        </ul>
        <div>
          <router-link to="/cards">
            <md-chips v-model="cats" md-clickable> </md-chips>
          </router-link>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      cats: ["Persian Cat", "Burmese Cat", "Scottish Fold", "Maine Coon"],
    };
  },
};
</script>