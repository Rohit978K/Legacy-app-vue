import Vue from 'vue';
import Router from 'vue-router'

const Home = () => import('./components/HomePage.vue');
const Cards = () => import('./components/CardsPage.vue');
const Settings = () => import('./components/SettingsPage.vue');

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cards',
            name: 'cards',
            component: Cards
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        },
    ]
})

export default router;