import Vue from 'vue'
import Router from 'vue-router'
import Alisson from '@/components/Alisson'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/alisson',
      name: 'Alisson',
      component: Alisson
    }
  ]
})
