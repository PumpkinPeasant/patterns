import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'homePage',
        path: '/',
        component: () => import('@/pages/Home.vue'),
        meta: {
            heading: 'Дашборд',
            title: 'Дашборд',
            breadcrumb: {
                label: 'Главная страница',
            },
        },
    },
    {
        name: 'coffeePage',
        path: '/coffee',
        component: () => import('@/pages/Coffee.vue'),
        meta: {
            heading: 'Кофе',
            title: 'Кофе',
            breadcrumb: {
                label: 'Кофейня',
            },
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
