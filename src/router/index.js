import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/home'
import Talk from '../page/talk'
import Research from '../page/research'
import Trend from '../page/trend'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'Home',
      component:Home,
      children:[
        {
          path: '/talk',
          name: 'Talk',
          component: Talk
        },
        {
          path: '/research',
          name: 'Research',
          component: Research
        },
        {
          path: '/trend',
          name: 'Trend',
          component: Trend
        }
      ]
    },
    {
      path:'/',
      redirect:'/talk'
    }
  ]
})
