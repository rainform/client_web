import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/loginPage',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue'),
    children: [
      {
        path: 'personalInformation',
        name: 'PersonalInformation',
        component: () => import('../components/PersonalInformation.vue'),
      },
      {
        path: 'longevity',
        name: 'Longevity',
        component: () => import('../components/Longevity.vue'),
      },
      {
        path: 'prayFor',
        name: 'PrayFor',
        component: () => import('../components/PrayFor.vue'),
      },
      {
        path: 'ceremony',
        name: 'Ceremony',
        component: () => import('../components/Ceremony.vue'),
      },
      {
        path: 'checkForm',
        name: 'CheckForm',
        component: () => import('../components/CheckForm.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
});

export default router;
