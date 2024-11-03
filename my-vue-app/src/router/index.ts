import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue'; // Check if the path is correct
import About from '../view/About.vue'; // Check if the path is correct
import HelloWorld from '../components/HelloWorld.vue'; // Check if the path is correct

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/hello', name: 'HelloWorld', component: HelloWorld },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
