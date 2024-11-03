<template>
    <div class="home">
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main page of the application.</p>
      <!-- Display a greeting if userName prop is provided -->
   
      
      <!-- Counter display -->
      <p>Counter: {{ counter }}</p>
      <!-- Button to increment the counter -->
      <button @click="incrementCounter">Increment Counter</button>
      <!-- Button to reset the counter -->
      <button @click="resetCounter">Reset Counter</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'; // Import necessary Vue functions
  
  export default defineComponent({
    name: 'Home', // Define the component name
  
   
  
    // You can define setup() for reactive properties or methods
    setup(props) {
      // Define a reactive counter variable
      const counter = ref<number>(0); // Initialize the counter at 0
  
      // Define a method to increment the counter
      const incrementCounter = () => {
        counter.value++;
      };
  
      // Define a method to reset the counter
      const resetCounter = () => {
        counter.value = 0; // Reset counter to 0
      };
  
      // Returning props and methods allows access to them in the template
      return {
        counter, // Expose counter variable to the template
        incrementCounter, // Expose increment method to the template
        resetCounter // Expose reset method to the template
      };
    }
  });
  </script>
  
  <style scoped>
  .home {
    text-align: center; 
  }
  </style>
  