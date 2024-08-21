import { type RouteRecordRaw , createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/pages/home.vue'),
        name: 'home'
    },
    {
        path: '/movies/:id',
        component: () => import('@/pages/movieDetails.vue'),
        name: 'movie-details'
    }
   
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;