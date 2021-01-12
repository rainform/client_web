<template>
  <div class="ceremony">
    <h2>往生蓮位登記</h2>
    <div class="container" v-for="(item, key) in prayFor" :key="key">
      <form>
        <div class="input-group">
          <label for="prayfor_name">陽上設立人姓名</label>
          <input id="prayfor_name" type="text" v-model="item.registerName">
        </div>
        <div class="input-group">
          <label>超薦項目</label>
          <input type="text">
          <!-- <div class="input-group" v-for="(selection, key) in item.targetSelection" :key="key">
            <input :id="selection" type="radio" name="seleteTarget" :value="item.prayType">
            <label :for="selection">{{item.prayType}}</label>
          </div> -->
          <!-- targetValue: {{item.prayType}} -->
        </div>
        <div class="input-group">
          <label for="prayfor_targetAddress">超薦先人姓名/地址</label>
          <input id="prayfor_targetAddress" type="text" v-model="item.prayDetail">
        </div>
      </form>
      <div class="check-panel">
        <table>
          <tr>
            <td>陽上設立人姓名</td>
            <td>{{item.registerName}}</td>
          </tr>
          <tr>
            <td>超薦項目</td>
            <td>{{item.prayType}}</td>
          </tr>
          <tr>
            <td>超薦人姓名/地址</td>
            <td>{{item.prayDetail}}</td>
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
    prayFor: {
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
      width: 150px;
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
