import Vue from 'vue'
import VueRouter from 'vue-router'
import Padrao from '../template/Padrao.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Template',
    component: Padrao,
    redirect: '/home',
    children: [{
            path: '/home',
            name: 'Home',
            component: () =>
                import ('../views/Home.vue')
        },
        {
            path: '/games',
            name: 'Games',
            component: () =>
                import ('../views/Games.vue')
        },
        {
            path: '/game/:id',
            name: 'Game',
            component: () =>
                import ('../views/Game.vue')
        },
        {
            path: '/noticias',
            name: 'Noticias',
            component: () =>
                import ('../views/Noticias.vue')
        },
        {
            path: '/sobre',
            name: 'Sobre',
            component: () =>
                import ('../views/Sobre.vue')
        },
        {
            path: '/contato',
            name: 'Contato',
            component: () =>
                import ('../views/Contato.vue')
        }
    ]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router