<template>
  <div class="personalInformation" :class="{'checkMode': checkMode}">
    <h2><span>STEP1</span> 個人基本資料</h2>
    <div class="container">
      <form v-if="checkMode === false">
        <div class="status-remind">
          <p>
            資料自動代入 (第一次登入者不適用)
          </p>
        </div>
        <div class="input-group">
          <label for="personal_name">填表人姓名 <span style="color: #c51919;">*</span></label>
          <input id="personal_name" v-model="personal.name" type="text" placeholder="請填寫您的姓名">
        </div>
        <div class="input-group">
          <label for="personal_address">地址 <span style="color: #c51919;">*</span></label>
          <input id="personal_address" v-model="personal.address" type="text" placeholder="請填寫您的地址">
        </div>
        <div class="input-group">
          <label for="personal_phone">行動電話 <span style="color: #c51919;">*</span></label>
          <input id="personal_phone" v-model="personal.phone" type="text" placeholder="請填寫您的行動電話">
        </div>
        <div class="input-group">
          <label for="personal_telephone">電話</label>
          <input id="personal_telephone" v-model="personal.telephone" type="text" placeholder="請填寫您的電話">
        </div>
        <div class="input-group">
          <label for="personal_email">E-mail</label>
          <input id="personal_email" v-model="personal.email" type="text" placeholder="請填寫您的E-mail">
        </div>
        <div class="input-group">
          <label for="personal_line">Line</label>
          <input id="personal_line" v-model="personal.line" type="text" placeholder="請填寫您的Line">
        </div>
        <div class="input-group">
          <label for="personal_wechat">Wechat</label>
          <input id="personal_wechat" v-model="personal.wechat" type="text" placeholder="請填寫您的Wechat">
        </div>
        <div class="input-group">
          <label for="personal_informMethod">下次活動通知方式</label>
          <select id="personal_informMethod" v-model="personal.informMethod">
            <option value="" style="display:none">
              請選擇
            </option>
            <option v-for="(method, index) in informMethod" :key="index" :value="method+'通知'">
              {{ method }}
            </option>
          </select>
        </div>
      </form>

      <form v-if="checkMode === true">
        <div class="input-group">
          <label for="personal_name">填表人姓名 </label>
          <p>
            {{ personal.name }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_address">地址 </label>
          <p>
            {{ personal.address }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_phone">行動電話 </label>
          <p>
            {{ personal.phone }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_telephone">電話</label>
          <p>
            {{ personal.telephone }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_email">E-mail</label>
          <p>
            {{ personal.email }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_line">Line</label>
          <p>
            {{ personal.line }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_wechat">Wechat</label>
          <p>
            {{ personal.wechat }}
          </p>
        </div>
        <div class="input-group">
          <label for="personal_informMethod">下次活動通知方式</label>
          <p>
            {{ personal.informMethod }}
          </p>
        </div>
      </form>

      <div v-if="checkMode === false" class="btn-group">
        <div>
          <a class="btn btn-primary" @click.prevent="saveInfo('next')">
            下一步
          </a>
        </div>
      </div>

      <div v-if="checkMode === true" class="btn-group-fix">
        <div>
          <router-link to="personalInformation" class="btn btn-dark btn-sm">
            修改
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FormApi from '@/apis/FormApi';
import { PersonalInformation } from '@/models/CeremonyFormModel';
import Vue from 'vue';

export default Vue.extend({
  props: {
    checkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      personal: new PersonalInformation(),
      informMethod: [
        '手機簡訊',
        'E-mail信箱',
        'Line群組',
        'Wechat群組',
        '郵寄紙本',
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.personal = this.$store.state.personalInformation;
    },
    saveInfo(move: string) {
      this.$store.commit('updatePersonalInformation', this.personal);
      if (move === 'next') {
        this.$router.push('longevity');
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$remind: rgb(204, 0, 0);

.personalInformation{
  position: relative;
  h2{
    padding: 20px;
    margin: 0;
  }
  form{
    width: 50%;
    margin: auto;
    padding: 20px;
    .status-remind{
      p{
        text-align: left;
        font-size: 0.8rem;
        color: $remind;
      }
    }
    .input-group{
      margin-bottom: 20px;
      label{
        max-width: 100%;
        margin-bottom: 10px;
        text-align: left;
        font-weight: 700;
      }
      input, select{
        width: 100%;
        border: 0;
        background-color: #eee;
        border-radius: 5px;
        padding: 3px 10px;
        &:focus{
          outline: none;
        }
      }
      select{
        padding: 5px 10px;
      }
    }
  }
}
.checkMode{
  h2{
    padding: 0;
    padding-bottom: 20px;
  }
  .container{
    form{
      margin: 0;
      padding: 0;
      .input-group{
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        label{
          margin: 0px;
          width: 10rem;
        }
      }
    }
  }
}

</style>
