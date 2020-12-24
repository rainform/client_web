<template>
  <div class="login">
    <h1>This is Login page</h1>
<div id="firebaseui-auth-container"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
    };
  },
  methods: {

  },
  mounted() {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
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
});
</script>
