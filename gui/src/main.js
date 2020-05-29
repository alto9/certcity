import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import "regenerator-runtime";

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(VueAxios, axios)
Vue.prototype.$log = console.log.bind(console)

var vm = new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
