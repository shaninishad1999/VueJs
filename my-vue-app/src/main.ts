import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';  // Import your router
import vuetify from './plugins/vuetify'; // Import the Vuetify plugin
import { createPinia } from 'pinia'; // Optional: If you're using Pinia for state management

const app = createApp(App);

// Use plugins in the correct order
app.use(vuetify); // Use Vuetify
app.use(router); // Use the router
app.use(createPinia()); // Use Pinia if you're using it

app.mount('#app');
