import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()

const app = createApp(App)

app.use(createPinia())
pinia.use(piniaPluginPersistedState)
app.use(router)

app.mount('#app')
