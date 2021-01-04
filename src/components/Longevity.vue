<template>
  <div class="longevity">
    <h2>長生祿位登記</h2>
    <form>
      <div class="input-group">
        <input v-for="(item, key) in longevity" :key="key" type="text" :placeholder="item">
      </div>
    </form>
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
