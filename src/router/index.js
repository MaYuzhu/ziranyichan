import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home'
import Chengguo from '../pages/chengguo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:Home,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    {
      path: '/chengguo',
      component:Chengguo,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
  ]
})
