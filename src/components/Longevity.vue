<template>
  <div class="longevity">
    <h2>長生祿位登記</h2>
    <div>
      (需要加一個可以input的格子)
    </div>
    <div class="container" v-for="(item, key) in longevity" :key="key" type="text">
      <form>
        <div class="input-group">
          <label>長生祿位</label>
          <input id="longevity_name" type="text" v-model="item.name">
        </div>
      </form>
      <form>
        <div class="input-group">
          <label for="longevity_name">長生祿位</label>
          <input id="longevity_name" type="text" v-model="item.name">
        </div>
      </form>
      <div class="check-panel">
        <table>
          <tr>
            <td>長生祿位</td>
            <td>{{item.name}}</td>
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
    longevity: {
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
