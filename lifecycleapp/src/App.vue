<template>
<div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, at.</p>
<HomePage/>
 <LifeCyclePage/>
</div>
</template>



<script>
import HomePage from "./components/Home.vue"
import LifeCyclePage from "./components/LifeCycle"
export default {
  name: 'App',
  components: {
    HomePage,
    LifeCyclePage
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
