import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../components/Menu.vue'
import List from '../components/List.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
