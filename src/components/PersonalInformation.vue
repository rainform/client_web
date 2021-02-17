<template>
  <div class="personalInformation" :class="{'checkMode': checkMode}">
    <h2>STEP1 個人基本資料</h2>
    <div class="container">
      <form>
        <div class="input-group">
          <label for="personal_name">填表人姓名</label>
          <input v-if="checkMode === false" id="personal_name" v-model="personal[0].name" type="text" placeholder="請填寫您的姓名">
          <p v-if="checkMode === true">
            填表人姓名{{ personal[0].name }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_address">地址</label>
          <input v-if="checkMode === false" id="personal_address" v-model="personal[0].address" type="text" placeholder="請填寫您的地址">
          <p v-if="checkMode === true">
            address{{ personal[0].address }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_phone">行動電話</label>
          <input v-if="checkMode === false" id="personal_phone" v-model="personal[0].phone" type="text" placeholder="請填寫您的行動電話">
          <p v-if="checkMode === true">
            phone{{ personal[0].phone }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_telephone">電話</label>
          <input v-if="checkMode === false" id="personal_telephone" v-model="personal[0].telephone" type="text" placeholder="請填寫您的電話">
          <p v-if="checkMode === true">
            telephone{{ personal[0].telephone }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_email">E-mail</label>
          <input v-if="checkMode === false" id="personal_email" v-model="personal[0].email" type="text" placeholder="請填寫您的E-mail">
          <p v-if="checkMode === true">
            email{{ personal[0].email }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_line">Line</label>
          <input v-if="checkMode === false" id="personal_line" v-model="personal[0].line" type="text" placeholder="請填寫您的Line">
          <p v-if="checkMode === true">
            line{{ personal[0].line }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_wechat">Wechat</label>
          <input v-if="checkMode === false" id="personal_wechat" v-model="personal[0].wechat" type="text" placeholder="請填寫您的Wechat">
          <p v-if="checkMode === true">
            wechat{{ personal[0].wechat }}
          </p>
        </div>
      </form>
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
    checkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      personal: [
        new PersonalInformation('', '', '', '', '', '', ''),
      ],
    };
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
        max-width: 100%;
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
}
.checkMode{
  h2{
    display: none;
  }
  .container{
    .input-group{
      border: black 1px solid;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      label{
        border-right: black 1px solid;
        margin: 0px;
        width: 10rem;
      }
      p{
        margin: 0px;
      }
    }
  }
}

</style>
