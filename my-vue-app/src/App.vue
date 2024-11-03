<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>My Vuetify App</v-toolbar-title>
      <v-spacer></v-spacer>
      <nav>
        <v-btn text to="/home" class="mx-2" @mouseover="setCursorPointer" @mouseleave="resetCursor">Home</v-btn>
        <v-btn text to="/about" class="mx-2" @mouseover="setCursorPointer" @mouseleave="resetCursor">About</v-btn>
        <v-btn text to="/hello" class="mx-2" @mouseover="setCursorPointer" @mouseleave="resetCursor">HelloWorld</v-btn>
      </nav>
    </v-toolbar>

    <v-container>
      <v-row>
        <v-col>
          <h1>Welcome to the Home Page!</h1>
          <p>This is the main page of the application.</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <main>
            <router-view></router-view>
          </main>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn 
            :style="{ backgroundColor: buttonClicked ? 'green' : '#155a8a' }" 
            @click="handleClick" class="button">Click Me!</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      buttonClicked: false // Track the button click state
    };
  },
  methods: {
    showAlert() {
      alert('Button clicked!');
    },
    handleClick() {
      this.buttonClicked = !this.buttonClicked; // Toggle button state on click
      this.showAlert(); // Call the alert function
    },
    setCursorPointer(event: MouseEvent) {
      const target = event.target as HTMLElement;
      target.style.cursor = 'pointer'; // Set cursor to pointer
    },
    resetCursor(event: MouseEvent) {
      const target = event.target as HTMLElement;
      target.style.cursor = 'default'; // Reset cursor to default
    }
  }
});
</script>

<style scoped>
.button {
  background: #155a8a;
  color: white;
}
nav {
  height: 60px;
  background: #1976d2;
  color: white;
  margin-top: 20px; /* Optional: Adds some spacing above the nav */
}
.v-toolbar {
  background-color: #1976d2; /* Change the background color of the toolbar */
}
.v-btn {
  color: white; /* Change button text color */
}
.v-btn:hover {
  background-color: #155a8a; /* Change button color on hover */
}
</style>
