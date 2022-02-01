import Vue from 'vue'
import App from './App.vue'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'

Vue.use(VueScrollProgressBar)

new Vue({
  render: h => h(App),
}).$mount('#app')
