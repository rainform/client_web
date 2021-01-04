<template>
  <div class="ceremony">
    <h2>往生蓮位登記</h2>
    <form v-for="(item, key) in prayFor" :key="key">
      <div class="input-group">
        <label for="prayfor_name">陽上設立人姓名</label>
        <input id="prayfor_name" type="text">
      </div>
      <p>超薦項目</p>
      <div class="input-group" v-for="(selection, key) in item.targetSelection" :key="key">
        <input :id="selection" type="radio" name="seleteTarget" :value="item.targetValue">
        <label :for="selection">{{selection}}</label>
      </div>

      targetValue: {{item.targetValue}} 目前沒綁到(value?)
      <div class="input-group">
        <label for="prayfor_targetName">超薦人姓名</label>
        <input id="prayfor_targetName" type="text">
      </div>
      <div class="input-group">
        <label for="prayfor_targetAddress">地址</label>
        <input id="prayfor_targetAddress" type="text">
      </div>
    </form>
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
