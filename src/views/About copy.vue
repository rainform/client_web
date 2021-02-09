<template>
  <div class="about">
    <div class="layout">
      <div class="ui-side-nav">
        <SideNav />
      </div>
      <div class="ui-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SideNav from '../components/SideNav.vue';

export default Vue.extend({
  components: {
    SideNav,
  },
  data() {
    return {
      // form: new CeremonyForm(),
    };
  },
});
</script>

<style lang="scss" scoped>
.layout{
  display: flex;

  .ui-side-nav {
    position: fixed;
    top: 44px;
    left: 0;
    height: calc(100% - 44px);
    background: #f0efef;
    color: #000;
    z-index: 3;
  }
  .ui-content{
    width: calc( 100% - 270px );
    min-height: calc(100% - 44px);
    margin-left: 270px;
    padding: 20px;
    z-index: 0;
  }
}
</style>
