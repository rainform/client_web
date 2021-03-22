<template>
  <div class="login-page">
    <div class="container">
      <div class="login-block">
        <div v-if="!openRegister" class="content">
          <h2>會員登入</h2>
          <div id="firebaseui-auth-container" />
        </div>
      </div>
    </div>
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

<style scoped lang="scss">
.login-page{
  // background: #fff url("../assets/123.jpg") no-repeat;
  // background-size: cover;
  min-height: calc(100vh - 44px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#000;
  .login-block{
    max-width: 600px;
    min-height: 500px;
    border: rgba(119, 119, 119, 0.4) 2px solid;
    border-radius: 10px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
      padding: 20px;
      width: 400px;
      h2{
        padding-bottom: 20px;
        margin-bottom: 40px;
        border-bottom: 1px solid #aaa;
        color: #777;
      }
    }
  }
}
</style>
