import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Email from '../views/Email.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/email',
    name: 'Email',
    component: Email
  }
]

const router = new VueRouter({
  routes
})

export default router
