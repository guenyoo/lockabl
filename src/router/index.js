import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LogIn from '../views/LogIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;