import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/',
    name: 'FirebaseLogin',
    component: () => import('../views/FirebaseLogin.vue'),
  },
  {
    path: '/userpages',
    name: 'UserPages',
    component: () => import('../views/UserPages.vue'),
    children: [
      {
        path: '/personalHomepage',
        name: 'PersonalHomepage',
        component: () => import('../views/PersonalHomepage.vue'),
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
      {
        path: '/successful',
        name: 'Successful',
        component: () => import('../views/Successful.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
});

export default router;
