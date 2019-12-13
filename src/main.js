// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui';  //这是把所有组件导入进来
import ElementUI from 'element-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);  //把所有组件注册为全局组件
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
