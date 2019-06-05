import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home.vue'
import ChengguoZiran from '../pages/chengguo_ziran.vue'
import ChengguoWenhua from '../pages/chengguo_wenhua.vue'

import Belt from '../pages/belt.vue'
import Show_v from '../pages/show_v.vue'
import Jiance from '../pages/jiance'

import Ziran from '../pages/chengguo_ziran2ji/ziranyichan.vue'
import Zhuanti from '../pages/chengguo_ziran2ji/zhuantishuju.vue'
import Jiaohu from '../pages/chengguo_ziran2ji/jiaohu.vue'

import Wenhua from '../pages/chengguo_wenhua2ji/ziranyichan.vue'
import WenZhuanti from '../pages/chengguo_wenhua2ji/zhuantishuju.vue'
import WenJiaohu from '../pages/chengguo_wenhua2ji/jiaohu.vue'
/*首页-图片点击*/
import PictureLink from '../pages/picture_link'
/*数据管理*/
import DataAll from '../pages/data_all'
import DataTwo from '../pages/data_all_level2/data_two'
import DataThree from '../pages/data_all_level2/data_three'
import DataManagement from '../pages/data_all_level2/data_management'
import DataUpload from '../pages/data_all_level2/data_management_level2/data_upload'
import DataTable from '../pages/data_all_level2/data_management_level2/data_table'
import DataFile from '../pages/data_all_level2/data_management_level2/data_file'


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
      path: '/chengguoziran',
      component:ChengguoZiran,
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
          path: '',
          redirect: '/chengguoziran/ziran'
        },
      ],
    },
    {
      path: '/chengguowenhua',
      component:ChengguoWenhua,
      meta: {
        keepAlive: true // 需要缓存
      },
      children:[
        {
          path: 'ziran',
          component: Wenhua
        },
        {
          path: 'zhuanti',
          component: WenZhuanti
        },
        {
          path: 'jiaohu',
          component: WenJiaohu
        },
        {
          path: '',
          redirect: '/chengguowenhua/ziran'
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
    {
      path: '/jiance',
      component: Jiance,
    },
    {
      path: '/picture_link',
      component: PictureLink,
    },
    {
      path: '/data_all',
      component: DataAll,
      children:[
        {
          path: 'data_management',
          component: DataManagement,
          redirect: {name: 'DataFile'},
          children:[
            {
              path: 'data_file',
              name: 'DataFile',
              component: DataFile
            },
            {
              path: 'data_table',
              component: DataTable
            },
            {
              path: 'data_upload',
              component: DataUpload
            },
            /*{
              path: '',
              redirect: 'data_file'
            },*/
          ],
        },
        {
          path: 'data_two',
          component: DataTwo
        },
        {
          path: 'data_three',
          component: DataThree
        },
        {
          path: '',
          redirect: 'data_management'
        },
      ],

    }
  ]
})
