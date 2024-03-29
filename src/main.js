import Vue from 'vue'
import App from './App'
import router from './router/router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import './common/stylus/index.styl'

fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
