import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import HomeAppbar from '../components/HomeAppbar.vue';
import List from '../components/List.vue';
import ListAppbar from '../components/ListAppbar.vue';
import Model from '../components/Model.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    components:
    {
      main_view: Home,
      appbar_view: HomeAppbar,
    }
  },
  {
    path: '/list',
    name: 'List',
    components:
    {
      main_view: List,
      appbar_view: ListAppbar,
    }
  },
  {
    path: '/test',
    name: 'Model',
    component: Model
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
