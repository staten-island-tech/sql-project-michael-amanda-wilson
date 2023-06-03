import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const useCounterStore = defineStore('c-user', () => {
  let cartTotal = ref(0)

  let harus = ref([])
  return {
    harus,
    cartTotal
  }
})
