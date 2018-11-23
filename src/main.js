import 'babel-polyfill'
import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App.vue'


Vue.use(ElementUI)
Vue.use(VueResource)


let LOCAL_API_URL;
try { API_URL; }
catch (e) {
  LOCAL_API_URL = 'http://localhost:8000/'
}

if (LOCAL_API_URL) {
  Vue.http.options.root = LOCAL_API_URL
} else {
  Vue.http.options.root = API_URL
}


new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
