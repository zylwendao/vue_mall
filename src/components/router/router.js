import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "home" */ '@/components/login/login.vue'),
    },
    // {
    //     path: '/home',
    //     name: 'home',
    //     component: () => import( /* webpackChunkName: "home" */ '@/components/login/home.vue'),
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出
export default router