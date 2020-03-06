import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Count from '@/components/Count'
import Asd from '@/components/Asd'
import Father from '@/components/Father'
import Child from '@/components/Child'

Vue.use(Router)

const vueRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    },
    {
      path: '/asd',
      name: 'asd',
      component: Asd
    },
    {
      path:'/father',
      name:'father',
      component:Father
    },
    {
      path:'/child',
      name:'child',
      component:Child
    }
  ]
})
vueRouter.beforeEach((to, from, next) => {
  // const nextRoute = ['count', 'asd'];
  const uName = localStorage.getItem('username');
  if (to.path != '/' && !uName) {
    next({path: '/'})
  } else {
    next()
  }
})
export default vueRouter
