<template>
  <div class="ceremony">
    <h2>法會參加登記</h2>
    <div class="container" v-for="(item, key) in ceremony" :key="key">

    <form>
      <div class="input-group">
        <label for="ceremony_name">姓名</label>
        <input id="ceremony_name" type="text" v-model="item.name">
      </div>
      <div class="input-group">
        <label for="ceremony_gender">性別</label>
        <input id="ceremony_gender" type="text" v-model="item.gender">
      </div>
      <div class="input-group">
        <label for="ceremony_age">年齡</label>
        <input id="ceremony_age" type="text" v-model="item.age">
      </div>
      <div class="input-group">
        <label for="ceremony_comeDate">來寺日期</label>
        <input id="ceremony_comeDate" type="text" v-model="item.comeDate">
      </div>
      <div class="input-group">
        <label for="ceremony_backDate">離寺日期</label>
        <input id="ceremony_backDate" type="text" v-model="item.backDate">
      </div>
      <div class="input-group">
        <label for="ceremony_note">備註</label>
        <input id="ceremony_note" type="text" v-model="item.note">
      </div>
    </form>
    <div class="check-panel">
        <table>
          <tr>
            <td>姓名</td>
            <td>{{item.name}}</td>
          </tr>
          <tr>
            <td>性別</td>
            <td>{{item.gender}}</td>
          </tr>
          <tr>
            <td>年齡</td>
            <td>{{item.age}}</td>
          </tr>
          <tr>
            <td>來寺日期</td>
            <td>{{item.comeDate}}</td>
          </tr>
          <tr>
            <td>離寺日期</td>
            <td>{{item.backDate}}</td>
          </tr>
          <tr>
            <td>備註</td>
            <td>{{item.note}}</td>
          </tr>
        </table>
      </div>
  </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    ceremony: {
      type: Array,
      default: () => ([
      ]),
    },
  },
  data() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>

.container{
  position: relative;
  .input-group{
    margin-bottom: 20px;
    label{
      width: 100px;
    }
  }
  .check-panel{
    background-color: rgb(255, 240, 197);
    position: absolute;
    top: 0;
    right: 0;
    table, td{
      border: 1px solid rgb(100, 100, 100);
    }
    td{
      text-align: left;
      padding: 5px;
      width: 100px;
    }
  }
}

</style>
