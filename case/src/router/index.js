import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addNewBook',
    name: 'AddNewBook',
    component: () => import('../views/AddNewBook.vue')
  },
  {
    path: '/bookList',
    name: '/BookList',
    component: () => import('../views/BookList.vue')
  },
  {
    path: '/getUSer',
    name: '/GetUSer',
    component: () => import('../views/GetUser.vue')
  },
  {
    path: '/setUSer',
    name: '/SetUSer',
    component: () => import('../views/SetUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
