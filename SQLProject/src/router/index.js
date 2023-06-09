import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { userSessionStore } from '../client/userSession'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_SUPABASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        needsAuth: false
      }
    },
    {
      path: '/harulogin',
      name: 'harulogin',
      component: () => import('../views/harulogin.vue'),
      meta: {
        needsAuth: false
      }
    },
    {
      path: '/harusignup',
      name: 'harusignup',
      component: () => import('../views/harusignup.vue'),
      meta: {
        needsAuth: false
      }
    },

    {
      path: '/harupics',
      name: 'harupics',
      component: () => import('../views/harupics.vue'),
      meta: {
        needsAuth: true
      }
    },

    {
      path: '/haruabout',
      name: 'haruabout',
      component: () => import('../views/haruabout.vue'),
      meta: {
        needsAuth: true
      }
    },

    {
      path: '/CartView',
      name: 'cartview',
      component: () => import('../views/CartView.vue'),
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/harusignout',
      name: 'harusignout',
      component: () => import('../views/harusignout.vue'),
      meta: {
        needsAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  const userSession = userSessionStore()
  // console.log(userSession.session)
  if (to.path === '/harulogin') {
    if (userSession.session) {
      return next('/harusignout')
    }
  }
  if (to.meta.needsAuth) {
    if (userSession.session) {
      return next()
    } else {
      alert('You are not logged in')
      return next('/harulogin')
    }
  }

  return next()
})

export default router
