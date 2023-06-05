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
      path: '/harulogin',
      name: 'harulogin',
      component: () => import('../views/harulogin.vue')
    },

    {
      path: '/harupics',
      name: 'harupics',
      component: () => import('../views/harupics.vue')
    },

    {
      path: '/haruabout',
      name: 'haruabout',
      component: () => import('../views/haruabout.vue')
    }
  ]
})

export default router
