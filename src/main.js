import Vue from 'vue'
import App from './App'

import Cov from './cov'
import router from './router'

Vue.config.debug = true

let $root = null

Vue.prototype.$Cov = {
  setRoot(vm) {
    $root = vm
  },
  hideGlobalNav() {
    $root.state.globalNavShow = false
  },
  showGlobalNav() {
    $root.state.globalNavShow = true
  }
}
Vue.prototype.$Zeus = new Vue()
let swiper = new Cov()
Vue.prototype.$swipe = swiper

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})