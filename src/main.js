import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import configRouter from './config-router.js'
// // 加载路由插件
Vue.config.debug = true

// 定义路由
let router = configRouter(VueRouter)
Vue.use(VueRouter)
// 初始化app
let app = new Vue({
  router,
  ...App
})
// 挂载根实例
app.$mount('#app')
