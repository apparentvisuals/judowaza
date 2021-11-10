import { createWebHistory, createRouter } from "vue-router";
import Home from './home.vue';
import NageNoKata from './kata/nage-no-kata.vue';
import Kata from './kata/index.vue';
import { nextTick } from "vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Home',
        }
    },
    {
        path: '/kata',
        name: 'kata',
        component: Kata,
        meta: {
            title: 'Kata',
        }
    },
    {
        path: '/kata/nage-no-kata',
        name: 'kata_nage-no-kata',
        component: NageNoKata,
        meta: {
            title: 'Nage no Kata',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;