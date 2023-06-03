import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Loginview.vue')
    },

    {
      path: '/bigamongus',
      name: 'bigamongus',
      component: () => import('../views/BigAmongus.vue')
    },

    {
      path: '/harupics',
      name: 'harupics',
      component: () => import('../views/harupics.vue')
    }
  ]
})

export default router
