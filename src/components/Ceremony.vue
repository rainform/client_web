<template>
  <div class="ceremony">
    <h2>法會參加登記</h2>
    <form v-for="(item, key) in ceremony" :key="key">
      <div class="input-group">
        <label for="ceremony_name">name</label>
        <input id="ceremony_name" type="text">
      </div>
      <div class="input-group">
        <label for="ceremony_gender">gender</label>
        <input id="ceremony_gender" type="text">
      </div>
      <div class="input-group">
        <label for="ceremony_age">age</label>
        <input id="ceremony_age" type="text">
      </div>
      <div class="input-group">
        <label for="ceremony_comeDate">comeDate</label>
        <input id="ceremony_comeDate" type="text">
      </div>
      <div class="input-group">
        <label for="ceremony_backDate">backDate</label>
        <input id="ceremony_backDate" type="text">
      </div>
      <div class="input-group">
        <label for="ceremony_note">note</label>
        <input id="ceremony_note" type="text">
      </div>
    </form>
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
