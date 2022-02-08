import Vue from 'vue'
import App from './App.vue'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'
import VueTypedJs from 'vue-typed-js'

import VueTilt from 'vue-tilt.js'
import vueRouter from 'vue-router'
import router from './components/routers/router'
Vue.use(VueTilt)
Vue.use(VueTypedJs)
Vue.use(VueScrollProgressBar)
Vue.use(vueRouter)




new Vue({
  render: h => h(App),
  router
}).$mount('#app')
