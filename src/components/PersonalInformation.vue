<template>
  <div class="personalInformation">
    <h2>STEP1 個人基本資料</h2>
    <div class="container">
      <form>
        <div class="input-group">
          <label for="personal_name">填表人姓名</label>
          <input id="personal_name" v-model="personal[0].name" type="text" placeholder="請填寫您的姓名">
        </div>
        <div class="input-group">
          <label for="personal_address">地址</label>
          <input id="personal_address" v-model="personal[0].address" type="text" placeholder="請填寫您的地址">
        </div>
        <div class="input-group">
          <label for="personal_phone">行動電話</label>
          <input id="personal_phone" v-model="personal[0].phone" type="text" placeholder="請填寫您的行動電話">
        </div>
        <div class="input-group">
          <label for="personal_telephone">電話</label>
          <input id="personal_telephone" v-model="personal[0].telephone" type="text" placeholder="請填寫您的電話">
        </div>
        <div class="input-group">
          <label for="personal_email">E-mail</label>
          <input id="personal_email" v-model="personal[0].email" type="text" placeholder="請填寫您的E-mail">
        </div>
        <div class="input-group">
          <label for="personal_line">Line</label>
          <input id="personal_line" v-model="personal[0].line" type="text" placeholder="請填寫您的Line">
        </div>
        <div class="input-group">
          <label for="personal_wechat">Wechat</label>
          <input id="personal_wechat" v-model="personal[0].wechat" type="text" placeholder="請填寫您的Wechat">
        </div>
      </form>
    </div>
    <div class="btn-group">
      <div>
        <a class="btn btn-primary" @click.prevent="changeStep('longevity')">
          下一步
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PersonalInformation } from '@/models/CeremonyFormModel';
import Vue from 'vue';

export default Vue.extend({
  props: {
    // personal: {
    //   type: Object,
    //   default: () => ({
    //     name: '',
    //     address: '',
    //     phone: '',
    //     telephone: '',
    //     email: '',
    //     line: '',
    //     wechat: '',
    //   }),
    // },
    info: {
      type: Object,
      default: () => ({
        onStep: '',
      }),
    },
  },
  data() {
    return {
      personal: [
        new PersonalInformation('', '', '', '', '', '', ''),
      ],
    };
  },
  methods: {
    changeStep(name: string) {
      this.info.onStep = name;
    },
  },
});
</script>

<style lang="scss" scoped>
.personalInformation{
  h2{
    padding: 20px;
    margin: 0;
  }
  form{
    width: 50%;
    margin: auto;
    padding: 20px;
    .input-group{
      margin-bottom: 20px;
      label{
        width: 100%;
        margin-bottom: 10px;
        text-align: left;
        font-weight: 700;
      }
      input{
        width: 100%;
        border: 0;
        background-color: #eee;
        border-radius: 5px;
        padding: 3px 10px;
        &:focus{
          outline: none;
        }
      }
    }
  }
  .btn-group{
    display: flex;
    justify-content: flex-end;
  }
}

</style>
