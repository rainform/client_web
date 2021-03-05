<template>
  <div class="successful">
    <div class="container">
      <div class="successful-block">
        <div class="content">
          <h2>報名成功</h2>
          <div class="btn-group">
            <router-link to="/personalHomepage" class="btn btn-secondary">
              回首頁
            </router-link>
          </div>
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
  min-height: calc(100vh - 44px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#000;
  .successful-block{
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
