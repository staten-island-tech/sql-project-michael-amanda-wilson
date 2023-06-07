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
      path: '/account',
      name: 'account',
      component: () => import('../views/Accountview.vue')
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
    },

    {
      path: '/CartView',
      name: 'Cartview',
      component: () => import('../views/CartView.vue')
    }
  ]
})

export default router
