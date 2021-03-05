<template>
  <div class="successful">
    <h2>個人首頁</h2>
    <div class="container">
      <div class="main col-md-9">
        <h3>近期活動通知</h3>
        <ul>
          <li>報名時間：</li>
          <li>活動簡章下載</li>
          <li>加入活動專用Line群組</li>
        </ul>
      </div>
      <div class="sidebar col-md-3">
        <div>
          <router-link to="/form/personalInformation" class="btn btn-secondary">
            報名活動
          </router-link>
        </div>
      </div>
    </div>
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
});
</script>

<style lang="scss" scoped>
.successful{
  text-align: left;
  h2{
    text-align: center;
    margin: 30px;
    font-weight: 900;
  }
  .container{
    display: flex;
    flex-direction: row;
    .main{
      background-color: rgb(240, 240, 240);
      padding: 10px;
      ul{
        margin: 0;
      }
    }
    .sidebar{
      background-color: rgb(214, 213, 213);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

</style>
