import { createRouter, createWebHashHistory } from 'vue-router'
import Menu from '@/views/Menu'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import(/* webpackChunkName: "game" */ '../views/Game.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import(/* webpackChunkName: "result" */ '../views/Result.vue')
  },
  {
    path: '/finish',
    name: 'Finish',
    component: () => import(/* webpackChunkName: "finish" */ '../views/Finish.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
