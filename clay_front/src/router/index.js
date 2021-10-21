import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import HomeAppbar from '../components/HomeAppbar.vue';
import List from '../components/List.vue';
import ListAppbar from '../components/ListAppbar.vue';
import Model from '../components/Model.vue';
import Topics from '../components/Topics.vue';
import Thread from '../components/Thread.vue';
import Comment from '../components/Comment.vue';

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
    path: '/list/:packet',
    name: 'Model',
    components:
    {
      main_view: Model,
      appbar_view: ListAppbar,
    }
  },
  {
    path: '/topics',
    name: 'Topics',
    components:
    {
      main_view: Topics,
    }
  },
  {
    path: '/list/:packet/:id',
    name: 'Thread',
    components:
    {
      main_view: Thread,
    }
  },
  {
    path: '/comment',
    name: 'Comment',
    components:
    {
      main_view: Comment,
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
