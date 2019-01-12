import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { 
      path: '*', 
      name: 'notfound',
      component: NotFound
     },
     {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Profile.vue')
     }
  ]
})
