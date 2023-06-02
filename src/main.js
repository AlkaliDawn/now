import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';

import Home from '@/pages/Home.vue';
import Saving from '@/pages/Saving.vue';
import Investing from '@/pages/Investing.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/saving',
        name: 'saving',
        component: Saving,
    },
    {
        path: '/investing',
        name: 'investing',
        component: Investing,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app')
