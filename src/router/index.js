import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home'
import Chengguo from '../pages/chengguo'

import Ziran from '../pages/chengguo2ji/ziranyichan'
import Zhuanti from '../pages/chengguo2ji/zhuantishuju'
import Jiaohu from '../pages/chengguo2ji/jiaohu'


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
      },
      children:[
        {
          path: 'ziran',
          component: Ziran
        },
        {
          path: 'zhuanti',
          component: Zhuanti
        },
        {
          path: 'jiaohu',
          component: Jiaohu
        },
        {
          path: '', // 请求的: /shop
          redirect: '/chengguo/ziran'
        },
      ],
    },
  ]
})
