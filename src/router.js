import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Shouye from './views/Shouye'
import Fenlei from './views/Fenlei'
import Gouwuche from './views/Gouwuche'
import Gerenzhongxin from './views/Gerenzhongxin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/Index",
      name:"Index",
      component:Index,
      children:[
        {
          path: '/index/shouye',
          name: 'shouye',
          component: Shouye,
        },
        {
          path: '/index/fenlei',
          name: 'fenlei',
          component: Fenlei,
        },
        {
          path: '/index/gouwuche',
          name: 'gouwuche',
          component: Gouwuche,
        },
        {
          path: '/index/gerenzhongxin',
          name: 'gerenzhongxin',
          component: Gerenzhongxin,
        },
      ]
    }
  ]
})

