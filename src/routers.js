 import Nav from './components/Nav.vue';
 import Books from './components/Books.vue';
 import {createRouter, createWebHistory} from 'vue-router';

 const routes = [
 {
  name:'Home',
  component: Nav,
  path: '/'
 },
 {
  name:'Books',
  component: Books,
  path: '/books'
 }
 ]
 const router = createRouter({
  history: createWebHistory(),
  routes,
 })

 export default router;