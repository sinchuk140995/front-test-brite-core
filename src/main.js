import 'babel-polyfill'
import Vue from 'vue'
import VueResource from 'vue-resource'

import router from './router'
// import App from './App.vue'
import AppLayout from './components/AppLayout.vue'


Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router,
  http: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
})
