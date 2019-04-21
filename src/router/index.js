import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index'
import news from '../components/news/news'
import support from '../components/support/support'
import about from '../components/about/about'
import phone from '../components/phone/phone'
import login from '../components/login/login'
import reg from '../components/reg/reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/support',
      name: 'support',
      component: support
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/phone',
      name: 'phone',
      component: phone
    }
  ]
})
