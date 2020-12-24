import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

firebase.initializeApp({
  apiKey: 'AIzaSyBWVvkkFXqZUQdoqbQ28Wv1vW2lkjHB2_0',
  authDomain: 'rainform-d5375.firebaseapp.com',
  projectId: 'rainform-d5375',
  storageBucket: 'rainform-d5375.appspot.com',
  messagingSenderId: '244947259',
  appId: '1:244947259:web:5403facdd1c5885c7fff1e',
  measurementId: 'G-FQ8P6Z4HV7',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
