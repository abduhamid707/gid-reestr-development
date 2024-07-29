import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import Gids from '../views/gids/index.vue'
import GidsId from '../views/gids/_id.vue'
import i18n from '../plugins/i18n.js'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/'+i18n.global.locale,
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      redirect: '/'+i18n.global.locale,
    },
    {
      path: '/'+i18n.global.locale+'/volunteers',
      name: 'volunteers',
      component: Gids
    },
    {
      path: '/'+i18n.global.locale+'/volunteers/single',
      name: 'volunteers_id',
      component: GidsId
    },
    {
      path: '/'+i18n.global.locale+'/applications',
      name: 'applications',
      component: () => import ('../views/applications/index.vue'),
    },
    {
      path: '/'+i18n.global.locale+'/applications/add',
      name: 'applications_new',
      component: () => import ('../views/applications/add.vue'),
    },
    {
      path: '/'+i18n.global.locale+'/applications/confirm',
      name: 'applications_confirm',
      component: () => import ('../views/applications/confirm.vue'),
    },
    {
      path: '/'+i18n.global.locale+'/first-log',
      name: 'first_log',
      component: () => import ('../views/firstLogin.vue'),
    },
    {
      path: '/'+i18n.global.locale+'/profile',
      name: 'profile',
      component: () => import ('../views/profile.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  let routeLocale = to.fullPath.split('/')[1];
  if(routeLocale != i18n.global.locale){
    next({path:'/'+i18n.global.locale})
  }
  next()
  })
export default router
