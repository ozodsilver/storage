import Vue from 'vue'
import App from './App.vue'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'
import VueTypedJs from 'vue-typed-js'

import VueTilt from 'vue-tilt.js'
Vue.use(VueTilt)
Vue.use(VueTypedJs)
Vue.use(VueScrollProgressBar)





new Vue({
  render: h => h(App),
}).$mount('#app')
