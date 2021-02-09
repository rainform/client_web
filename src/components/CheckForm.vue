<template>
  <div class="checkForm">
    <h2>STEP5 確認完整資料</h2>
    <!-- <div class="check-panel">
      <table>
        <tr>
          <td>name</td>
          <td>{{ personal[0].name }}</td>
        </tr>
        <tr>
          <td>address</td>
          <td>{{ personal[0].address }}</td>
        </tr>
        <tr>
          <td>phone</td>
          <td>{{ personal[0].phone }}</td>
        </tr>
        <tr>
          <td>telephone</td>
          <td>{{ personal[0].telephone }}</td>
        </tr>
        <tr>
          <td>email</td>
          <td>{{ personal[0].email }}</td>
        </tr>
        <tr>
          <td>line</td>
          <td>{{ personal[0].line }}</td>
        </tr>
        <tr>
          <td>wechat</td>
          <td>{{ personal[0].wechat }}</td>
        </tr>
      </table>
    </div> -->
    <div class="btn-group">
      <div>
        <router-link to="#" class="btn btn-secondary">
          修改
        </router-link>
      </div>
      <div>
        <router-link to="#" class="btn btn-danger">
          完成送出
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // props: {
  //   personal: {
  //     type: Array,
  //     default: () => ({
  //       name: '',
  //       address: '',
  //       phone: '',
  //       telephone: '',
  //       email: '',
  //       line: '',
  //       wechat: '',
  //     }),
  //   },
  // },
  data() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>
.checkForm{
  h2{
    padding: 20px;
    margin: 0;
  }
  .btn-group{
    display: flex;
    justify-content: space-between;
  }
}

.check-panel{
  background-color: rgb(255, 240, 197);
  table, td{
    border: 1px solid rgb(100, 100, 100);
  }
  td{
    text-align: left;
    padding: 5px;
    width: 100px;
  }
}

</style>
