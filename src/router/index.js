import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../page/Home'
import mybook from '../page/mybook.vue'
import classification from '../page/classification.vue'
import shoppingCart from '../page/shopping-cart.vue'
import Disc from '../page/disc.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/mybook',
      name: 'mybook',
      component: mybook
    },
    {
      path: '/disc',
      name: 'disc',
      component: Disc
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: shoppingCart

    }
  ]
})
// rem/px转换配置
window.onresize = function () {
  rem();
}
window.onload = function () {
  rem();
}
function rem() {
  let whdef = 100 / 1920;// 1920的设计图,使用100PX的默认值
  let html = document.documentElement;
  let wW = html.clientWidth;// 窗口宽度
  console.log(wW)
  let rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  document.documentElement.style.fontSize = rem + 'px';
  document.body.style.fontSize = '16px';
}