import Vue from 'vue'
import VueRouter from 'vue-router'
import Padrao from '../template/Padrao.vue'

Vue.use(VueRouter)

const routes = [{
<<<<<<< HEAD
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
            path: '/noticia/:id',
            name: 'Noticia',
            component: () =>
                import ('../views/Noticia.vue')
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
=======
  path: '/',
  name: 'Template',
  component: Padrao,
  redirect: '/home',
  children: [{
    path: '/home',
    name: 'Home',
    component: () =>
      import('../views/Home.vue')
  },
  {
    path: '/games',
    name: 'Games',
    component: () =>
      import('../views/Games.vue')
  },
  {
    path: '/game/:id',
    name: 'Game',
    component: () =>
      import('../views/Game.vue')
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: () =>
      import('../views/Noticias.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () =>
      import('../views/Sobre.vue')
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () =>
      import('../views/Contato.vue')
  }
  ]
},
{
  path: '/admin',
  name: 'admin',
  component: () => import('../admin/Login.vue')
>>>>>>> 0e9bbc9ad9ab008e0270919de90c5f9f43932ff0
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router