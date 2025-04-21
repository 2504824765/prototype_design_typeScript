import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/student-plan', component: () => import('../views/StudentPlan.vue') },
  { path: '/code-ide', component: () => import('../views/CodeIDE.vue') },
  { path: '/interview', component: () => import('../views/Interview.vue') },
  { path: '/teaching', component: () => import('../views/Teaching.vue') },
  { path: '/risk', component: () => import('../views/Risk.vue') },
  { path: '/community', component: () => import('../views/Community.vue') },
  { path: '/profile', component: () => import('../views/Profile.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})