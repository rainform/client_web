<template>
  <div class="side-nav-inner">
    <div class="title">
      報名 / 登記步驟
    </div>
    <div class="sidebar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="personalInformation" class="nav-link after">
            STEP1 個人基本資料
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="longevity" class="nav-link after">
            STEP2 長生祿位登記
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="prayFor" class="nav-link after">
            STEP3 往生蓮位登記
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="ceremony" class="nav-link after">
            STEP4 法會參加登記
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="checkForm" class="nav-link after">
            STEP5 確認完整資料
          </router-link>
        </li>
      </ul>
    </div>
    <div class="side-nav-block" />
    <!-- <div class="sidebar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="personalInformation" class="nav-link after">
            STEP1 個人基本資料
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="longevity" class="nav-link after">
            STEP2 長生祿位登記
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="prayFor" class="nav-link after">
            STEP3 往生蓮位登記
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="ceremony" class="nav-link after">
            STEP4 法會參加登記
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="checkForm" class="nav-link after">
            STEP5 確認完整資料
          </router-link>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SideNav',
  components: {
  },
  props: {
    info: {
      type: Object,
      default: () => ({
        onStep: '',
      }),
    },
  },
  data() {
    return {
    };
  },
});
</script>

<style scoped lang="scss">
i {
  margin: 0 5px;
}

.side-nav-inner {
  position: relative;
  height: 100%;
  width: 270px;
  overflow: hidden;
  white-space: nowrap;
  transition: width .1s ease-in-out;

  .title {
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    padding-left: 15px;
    cursor: pointer;
    &:hover {
      background-color: #e3e3e3;
    }
  }

  .sidebar {
    li{
      width: 100%;
      a {
        padding: 10px;
        font-size: 1.1em;
        font-weight: 700;
        text-decoration: none;
        color:#aaa;
        .fas {
          padding-right: 10px;
        }
        // &:hover {
        //   background: #aa999a;
        //   color: #fff;
        //   cursor: pointer;
        // }
      }
    }
    .active{
      background: #c7b5b6;
      color: #000;
    }
  }
  .side-nav-block{
    position: absolute;
    background-color: transparent;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
