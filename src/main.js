import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SmoothScrollbar from 'vue-smooth-scrollbar'

createApp(App).use(router).use(SmoothScrollbar).mount('#app')
