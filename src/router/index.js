import Vue from 'vue'
import Router from 'vue-router'
import FirstDeom from '@/components/FirstDeom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstDeom',
      component: FirstDeom
    }
  ]
})
