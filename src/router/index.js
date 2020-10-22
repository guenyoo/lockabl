import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/Home.vue';
import LogIn from '../views/LogIn.vue';
import Logout from '../views/Logout.vue';
import Locks from '../views/Locks.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
  },
  {
    path: '/',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/logout',
    name: 'LogOut',
    component: Logout,
  },
  {
    path: '/locks/:lockId',
    name: 'Locks',
    component: Locks,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'LogIn' && !store.state.user.userAuthenticated) {
    next({ name: 'LogIn' });
  } else {
    next();
  }
});

export default router;
