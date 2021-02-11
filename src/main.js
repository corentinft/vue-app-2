import { createApp } from 'vue'
import { VueCookieNext } from 'vue-cookie-next'
import App from './App.vue'
import store from './store'
import router from './router'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'

createApp(App).use(Equal).use(router).use(store).use(VueCookieNext).mount('#app')

// set default config
VueCookieNext.config({ expire: '7d' })