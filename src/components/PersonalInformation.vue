<template>
  <div class="personalInformation">
    <h2>個人基本資料</h2>
    <div class="container">
      <form>
        <div class="input-group">
          <label for="personal_name">填表人姓名</label>
          <input id="personal_name" type="text" v-model="personal.name">
        </div>
        <div class="input-group">
          <label for="personal_address">地址</label>
          <input id="personal_address" type="text" v-model="personal.address">
        </div>
        <div class="input-group">
          <label for="personal_phone">行動電話</label>
          <input id="personal_phone" type="text" v-model="personal.phone">
        </div>
        <div class="input-group">
          <label for="personal_telephone">電話</label>
          <input id="personal_telephone" type="text" v-model="personal.telephone">
        </div>
        <div class="input-group">
          <label for="personal_email">E-mail</label>
          <input id="personal_email" type="text" v-model="personal.email">
        </div>
        <div class="input-group">
          <label for="personal_line">Line</label>
          <input id="personal_line" type="text" v-model="personal.line">
        </div>
        <div class="input-group">
          <label for="personal_wechat">Wechat</label>
          <input id="personal_wechat" type="text" v-model="personal.wechat">
        </div>
      </form>
      <div class="check-panel">
        <table>
          <tr>
            <td>name</td>
            <td>{{personal.name}}</td>
          </tr>
          <tr>
            <td>address</td>
            <td>{{personal.address}}</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>{{personal.phone}}</td>
          </tr>
          <tr>
            <td>telephone</td>
            <td>{{personal.telephone}}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{{personal.email}}</td>
          </tr>
          <tr>
            <td>line</td>
            <td>{{personal.line}}</td>
          </tr>
          <tr>
            <td>wechat</td>
            <td>{{personal.wechat}}</td>
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
    personal: {
      type: Object,
      default: () => ({
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
