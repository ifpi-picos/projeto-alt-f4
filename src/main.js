import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import router from './router/index.js'
import CKEditor from '@ckeditor/ckeditor5-vue2'

import { BootstrapVue } from 'bootstrap-vue'
import firebaseApp from './firebase/index'

Vue.use(BootstrapVue)
Vue.use(firebaseApp)
Vue.use(CKEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
