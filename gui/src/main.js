import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
//import Alto9Vue from '@alto9/vue'
import Alto9Vue from '../node_modules/@alto9/vue/src/index.js' //Alto9 Vue UI Library
import axios from 'axios' // Promise based HTTP client for the browser and node.js 
import VueAxios from 'vue-axios' // integrate axios into vue
//import { iconsSet as icons } from './assets/icons/icons.js' //Alto9 Icon Set
import store from './store'
import "regenerator-runtime"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.performance = true
Vue.use(Alto9Vue, VueAxios, axios)
Vue.prototype.$log = console.log.bind(console)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  //icons,
  template: '<App/>',
  components: {
    App
  }
})
