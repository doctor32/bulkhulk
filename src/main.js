import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2TouchEvents from 'vue2-touch-events'
import '@/assets/scss/index.scss'

createApp(App)
    .use(store)
    .use(router)
    .use(Vue2TouchEvents)
    .mount('#app')
