<template>
  <div class="side-nav-inner">
    <div class="title">
      報名 / 登記步驟
    </div>
    <div class="sidebar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link after" @click.prevent="changeStep('personal')">
            STEP1 個人基本資料
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link after" @click.prevent="changeStep('longevity')">
            STEP2 長生祿位登記
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link after" @click.prevent="changeStep('prayFor')">
            STEP3 往生蓮位登記
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link after" @click.prevent="changeStep('ceremony')">
            STEP4 法會參加登記
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link after" @click.prevent="changeStep('checkForm')">
            STEP5 確認完整資料
          </a>
        </li>
      </ul>
    </div>
    <!-- <div class="sidebar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link after" to="personal">
            STEP1 個人基本資料
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link after" to="longevity">
            STEP2 長生祿位登記
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link after" to="prayfor">
            STEP3 往生蓮位登記
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link after" to="ceremony">
            STEP4 法會參加登記
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link after" to="checkForm">
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
  methods: {
    changeStep(name: string) {
      this.info.onStep = name;
    },
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
        color:#000;
        .fas {
          padding-right: 10px;
        }
        &:hover {
          background: #aa999a;
          color: #fff;
        }
      }
    }
    .active{
      background: #aa999a;
      color: #fff;
    }
  }
}
</style>
