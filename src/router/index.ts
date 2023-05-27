import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', 
    name: 'AuthPage__name',
    component: () => import('../pages/AuthPage.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../pages/MainPage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
