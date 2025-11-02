import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'Home',
        component: HomeView
        },
        {
        path: '/fullstack',
        name: 'FullStack',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/FullStackView.vue')
        },
        {
            path: '/rust',
            name: 'Rust',
            component: () => import('../views/RustView.vue')
        }
        ,
        {
            path: '/frontend',
            name: 'Frontend',
            component: () => import('../views/FrontEndView.vue')
        }
        ,
        {
            path: '/web3',
            name: 'Web3',
            component: () => import('../views/Web3View.vue')
        }
    ]
})

export default router