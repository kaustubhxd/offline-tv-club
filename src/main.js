import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SmoothScrollbar from 'vue-smooth-scrollbar'
import LoadScript from 'vue-plugin-load-script';

createApp(App).use(router).use(LoadScript).use(SmoothScrollbar).mount('#app')
