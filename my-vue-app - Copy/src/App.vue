<template>
  <div class="home">
    <h1>Welcome to the Home Page!</h1>
    <p>This is the main page of the application.</p>

    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/hello">HelloWorld</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style scoped>
.home {
  text-align: center;
}
nav {
  margin-top: 20px; /* Optional: Adds some spacing above the nav */
}
nav a {
  margin: 0 10px; /* Optional: Adds spacing between links */
  text-decoration: none; /* Removes underline from links */
  color: #42b983; /* Vue.js logo color */
}
nav a:hover {
  text-decoration: underline; /* Adds underline on hover */
}
</style>
