import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Carousel3d from 'vue-carousel-3d'

Vue.use(VueRouter)
Vue.use(Carousel3d)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
