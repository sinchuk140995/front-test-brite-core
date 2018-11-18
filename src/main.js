import 'babel-polyfill'
import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App.vue'
import './global-components'


Vue.use(ElementUI)
Vue.use(VueResource)


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  http: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  },
})
