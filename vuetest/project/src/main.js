// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js'
import router from './router/index'
import SIdentify from './components/Identify.vue'

Vue.use(Vuex)
Vue.use(Router)
Vue.use(ElementUI)
Vue.use(SIdentify)

Vue.config.productionTip = false

/* eslint-disable no-new */
// noinspection JSAnnotator
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
