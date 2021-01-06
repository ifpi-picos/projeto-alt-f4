// import { from } from 'core-js/core/array'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase/app'
import Padrao from '../template/Padrao.vue'
import Sidebar from '../template/Sidebar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Template',
    component: Padrao,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/games',
        name: 'Games',
        component: () => import('../views/Games.vue')
      },
      {
        path: '/game/:id',
        name: 'Game',
        component: () => import('../views/Game.vue')
      },
      {
        path: '/noticias',
        name: 'Noticias',
        component: () => import('../views/Noticias.vue')
      },
      {
        path: '/noticia/:id',
        name: 'Noticia',
        component: () => import('../views/Noticia.vue')
      },
      {
        path: '/sobre',
        name: 'Sobre',
        component: () => import('../views/Sobre.vue')
      },
      {
        path: '/contato',
        name: 'Contato',
        component: () => import('../views/Contato.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/admin',
    name: 'Sidebar',
    component: Sidebar,
    redirect: '/login',
    children: [
      {
        path: '/home-admin',
        name: 'home-admin',
        component: () => import('../views/admin/HomeAdmin.vue')
      },
      {
        path: '/cadastro-noticia',
        name: 'Cadastro-noticia',
        component: () => import('../views/admin/CadastroNoticia.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const PAGINA_NAO_AUTHENTICADO = ['/home', '/games', '/game/:id', '/noticias', '/noticia/:id', '/sobre', '/contato', '/login']
//   const HOME = '/home'
//   const LOGIN = '/login'
//   const PAGINA_INICIAL_AUTHENTICADO = '/home-admin'
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       if (to.path === LOGIN) {
//         next({ path: PAGINA_INICIAL_AUTHENTICADO })
//       }
//       next()
//     } else {
//       if (to.path !== PAGINA_NAO_AUTHENTICADO) {
//         next({ path: HOME })
//       }
//     }
//   })
//   next()
// })

export default router
