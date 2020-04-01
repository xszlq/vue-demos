import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/todo',
      name: 'todos',
      component: ()=> import('./views/Todo.vue')
    },

    {
      path: '/pop',
      name: 'pop',
      component: () => import('./views/Pop.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('./views/Calendar.vue')
    },

    {
      path: '/circle',
      name: 'circle',
      component: () => import('./views/Circle.vue')
    },

  ]
})
