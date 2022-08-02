import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Part1 from '@/components/HomeComponents/Part1'
import Part2 from '@/components/HomeComponents/Part2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'Part1',
          component: Part1
        },
        {
          path: '/',
          name: 'Part2',
          component: Part2
        }
      ]
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
