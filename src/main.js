import App from './App.vue';
import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import './style.css'
import 'remixicon/fonts/remixicon.css';

const app = createApp(App); 

app.use(PrimeVue, { theme: { preset: Aura } });
app.use(MotionPlugin);

app.mount('#app');