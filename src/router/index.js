import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home.vue'
import Chengguo from '../pages/chengguo.vue'

import Belt from '../pages/belt.vue'
import Show_v from '../pages/show_v.vue'

import Ziran from '../pages/chengguo2ji/ziranyichan.vue'
import Zhuanti from '../pages/chengguo2ji/zhuantishuju.vue'
import Jiaohu from '../pages/chengguo2ji/jiaohu.vue'


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
    {
      path: '/belt',
      component: Belt,
    },
    {
      path: '/show_v',
      component: Show_v,
    },
  ]
})
