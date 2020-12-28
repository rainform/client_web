<template>
  <div class="personalInformation">
    <h2>個人基本資料</h2>
    <form>
      <div>
        <label>uid</label>
        <input type="text" v-model="personal.uid" disabled>
      </div>
      <div class="input-group">
        <label for="personal_name">name</label>
        <input id="personal_name" type="text">
      </div>
      <div class="input-group">
        <label for="personal_address">address</label>
        <input id="personal_address" type="text">
      </div>
      <div class="input-group">
        <label for="personal_phone">phone</label>
        <input id="personal_phone" type="text">
      </div>
      <div class="input-group">
        <label for="personal_telephone">telephone</label>
        <input id="personal_telephone" type="text">
      </div>
      <div class="input-group">
        <label for="personal_email">email</label>
        <input id="personal_email" type="text">
      </div>
      <div class="input-group">
        <label for="personal_line">line</label>
        <input id="personal_line" type="text">
      </div>
      <div class="input-group">
        <label for="personal_wechat">wechat</label>
        <input id="personal_wechat" type="text">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    personal: {
      type: Object,
      default: () => ({
        uid: 'afas001451',
        name: '',
        address: '',
        phone: '',
        telephone: '',
        email: '',
        line: '',
        wechat: '',
      }),
    },
  },
  data() {
    return {
    };
  },
});
</script>
