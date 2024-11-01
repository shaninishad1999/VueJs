<template>
  <div id="app">
    <header>
      <h1>Welcome to My Vue App</h1>
    </header>
    <main>
      <HelloWorld msg="Hello from App.vue!" />
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}
</style>
