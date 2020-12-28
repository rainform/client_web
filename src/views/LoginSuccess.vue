<template>
  <div class="login-success">
    <h1>This is LoginSuccess page</h1>

    <img :src="photo" style="height: 120px"> <br>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{userId}}</p>
    <hr>
    <pre>{{user}}</pre>
    <button @click='logout'>Log out</button>

    <button @click='initMe'>init me</button>

    <button @click='uploadProfile'>Upload my profile</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';
import UserApi from '@/apis/UserApi';

export default Vue.extend({
  name: 'LoginSuccess',
  data() {
    return {
      name: '',
      photo: '',
      userId: '',
      email: '',
      user: null as null | firebase.User,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user: null | firebase.User) => {
      if (user) {
        this.name = user.displayName as string;
        this.email = user.email as string;
        this.photo = user.photoURL as string;
        this.userId = user.uid;
        this.user = user;
      }
    });
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
    initMe() {
      UserApi.initUser({
        uid: this.userId,
        displayName: this.name,
        email: this.email,
        photoURL: this.photo,
      });
    },
    uploadProfile() {
      const db = firebase.firestore();
      db.collection('users').doc(this.userId).set({
        name: this.name,
        photoURL: this.photo,
        email: this.email,
        owner: this.userId,
      })
        .then(() => {
          console.log('update ok');
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },
  },
});
</script>
