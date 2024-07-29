import './assets/media.css'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n'
import router from './router'
import { createPinia } from 'pinia'
import axios from "@/plugins/axios";
// import VueMask from "v-mask"
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { useStore } from '@/stores/store';

const app = createApp(App)
// app.use(VueMask)
app.use(router)
app.use(createPinia());
const piniaStore = useStore();
const store = {...piniaStore}
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$store = store;
app.use(i18n)
app.use(ElementPlus);
app.mount('#app')
