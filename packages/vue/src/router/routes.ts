import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/alert',
    name: 'alert',
    component: () => import('../pages/alert/index.vue'),
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../pages/button/index.vue'),
  },
]

export default routes
