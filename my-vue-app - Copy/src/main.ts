import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';  // Optional if using Vue Router
// import store from './';    // Optional if using Vuex

const app = createApp(App);
app.use(router);
// app.use(store);
app.mount('#app');
