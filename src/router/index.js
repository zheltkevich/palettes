import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/colors',
            name: 'colors',
            component: () => import('../views/ColorsView.vue'),
        },
        // {
        //     path: '/dark-scheme',
        //     name: 'dark-scheme',
        //     component: () => import('../views/SchemeView.vue'),
        // },
        {
            path: '/palette-builder',
            name: 'palette-builder',
            component: () => import('../views/PaletteBuilderView.vue'),
        },
    ],
})

export default router
