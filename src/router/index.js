import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(( '../views/Login.vue')) 
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/email',
    name: 'Email',
    component: () => import( '../views/Email.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
