<template>
  <div class="form">
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
    min-height: calc(100vh - 44px);
    background: #f0efef;
    color: #000;
    z-index: 3;
  }
  .ui-content{
    width: calc( 100% - 270px );
    min-height: calc(100vh - 44px);
    margin-left: 270px;
    padding: 20px;
    z-index: 0;
  }
}
</style>

<style lang="scss">
.btn-group{
  display: flex;
  justify-content: center;
  .btn{
    margin: 0 20px;
  }
}
.checkMode{
  margin-top: 20px;
  margin-bottom: 20px;
  h2{
    font-size: 20px;
    text-align: left;
    font-weight: 900;
    span{
      display: none;
    }
  }
  .container{
    form{
      .input-group{
        // border: black 1px solid;
        label{
          // border-right: black 1px solid;
        }
        p{
          margin: 0px;
        }
      }
    }
    table{
      // tr,th,td{
      //   border: black 1px solid;
      // }
    }
  }
  .btn-group-fix{
    position: absolute;
    top: 0px;
    right: 20px;
  }
}
</style>
