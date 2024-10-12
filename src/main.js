import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

import './style.css'
import 'remixicon/fonts/remixicon.css';

const app = createApp(App);

app.use(PrimeVue, { ripple: true });

app.mount('#app');