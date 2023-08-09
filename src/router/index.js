import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Email from '../views/Email.vue'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/',
    name: 'home',
    redirect: { path: "/login" },
    component: Home,
    children: [
      {
        path: '/todo',
        component: Todo
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/email',
        component: Email
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
