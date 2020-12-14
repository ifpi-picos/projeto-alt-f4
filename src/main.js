import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index.js'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'
import firebaseApp from './firebase/index'

Vue.use(BootstrapVue)
Vue.use(firebaseApp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
