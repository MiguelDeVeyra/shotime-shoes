import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes,faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch,faTimes,faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
