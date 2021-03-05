<template>
  <div class="userPages">
    <div id="nav">
      <a href="#" @click.prevent="logout">登出</a>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    logout() {
      console.log('logout');
      this.$router.push('/');
    },
  },
});
</script>

<style lang="scss" scoped>
#nav {
  text-align: right;
  padding: 10px;
  box-shadow: 0 2px 2px #ddd;
  position:sticky;
  top: 0;
  z-index:10;
  background-color: #fff;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 3px 5px;

    &:hover {
      background-color: #aaa;
      color: #fff;
    }
  }
}
</style>
