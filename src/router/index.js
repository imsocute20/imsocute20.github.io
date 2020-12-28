import Vue from 'vue'
import Router from 'vue-router'
import Money from '../views/Money'
import Labels from '../views/Labels'
import Statistics from '../views/Statistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/money',
      name: '记账'
    },
    {
      path: '/money',
      component: Money
    },
    {
      path: '/Labels',
      component: Labels
    },
    {
      path: '/statistics',
      component: Statistics
    }
  ]
})
