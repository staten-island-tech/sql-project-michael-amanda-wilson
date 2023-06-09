import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const userSessionStore = defineStore({
  id: 'userSession',
  state: () => ({
    session: useStorage('session', null)
  })
})
