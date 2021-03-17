<template>
  <div class="login">
    <h1>This is Login page</h1>
    <div id="firebaseui-auth-container" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

import UserApi from '@/apis/UserApi';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
    };
  },
  mounted() {
    if (firebase.auth().currentUser) {
      // auto redirect to homepage if already logged in
      this.$router.push(this.$store.state.homepageRoute);
    }

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult(authResult) {
          console.log(authResult);

          if (authResult) {
            if (authResult.additionalUserInfo.isNewUser) {
              // init user data
              console.log('new user');

              UserApi.initUser(authResult.user);
            } else {
              console.log('old user');
            }
            // fetch user data
            UserApi.get(authResult.user.uid);
          }

          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return false;
        },
      },
      // signInSuccessUrl: '/success',
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: 'TW',
        },
      ],
      // Other config options...
    });
  },
  methods: {

  },
});
</script>
