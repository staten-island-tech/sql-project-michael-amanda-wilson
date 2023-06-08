import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_SUPABASE_URL),
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
      name: 'cartview',
      component: () => import('../views/CartView.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   const auth = authStore()
//   if (to.matched.some((record) => record.meta.requireLogin) && auth.currentUser === null) {
//     next('/sign-in')
//   } else {
//     next()
//   }
// })

export default router
