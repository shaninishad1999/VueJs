import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import About from '../view/About.vue';
import HelloWorld from '../components/HelloWorld.vue'
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
