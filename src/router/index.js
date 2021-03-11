import { createRouter, createWebHistory } from 'vue-router'
import App from '../App'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
