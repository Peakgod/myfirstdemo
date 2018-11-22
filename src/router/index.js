import Vue from 'vue'
import Router from 'vue-router'
import FirstDemo from '@/components/FirstDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstDemo',
      component: FirstDemo
    }
  ]
})
