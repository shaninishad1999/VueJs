<template>
  <div>
    <EmplyeeListVue />
  </div>
</template>

<script>
import EmplyeeListVue from "./components/EmplyeeList.vue";

export default {
  name: "App",
  components: {
    EmplyeeListVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
