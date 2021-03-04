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
          <input id="personal_name" v-model="personal[0].name" type="text" placeholder="請填寫您的姓名">
        </div>
        <div class="input-group">
          <label for="personal_address">地址 <span style="color: #c51919;">*</span></label>
          <input id="personal_address" v-model="personal[0].address" type="text" placeholder="請填寫您的地址">
        </div>
        <div class="input-group">
          <label for="personal_phone">行動電話 <span style="color: #c51919;">*</span></label>
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

      <form v-if="checkMode === true">
        <div v-for="(item, key) in personalX" :key="key">
          <div class="input-group">
            <label for="personal_name">填表人姓名 </label>
            <p>
              {{ item.name }}
            </p>
          </div>
          <div class="input-group">
            <label for="personal_address">地址 </label>
            <p>
              {{ item.address }}
            </p>
          </div>
          <div class="input-group">
            <label for="personal_phone">行動電話 </label>
            <p>
              {{ item.phone }}
            </p>
          </div>
          <div class="input-group">
            <label for="personal_telephone">電話</label>
            <p>
              {{ item.telephone }}
            </p>
          </div>
          <div class="input-group">
            <label for="personal_email">E-mail</label>
            <p>
              {{ item.email }}
            </p>
          </div>
          <div class="input-group">
            <label for="personal_line">Line</label>
            <p>
              {{ item.line }}
            </p>
          </div>
          <div class="input-group">
            <label for="personal_wechat">Wechat</label>
            <p>
              {{ item.wechat }}
            </p>
          </div>
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
      personal: [
        new PersonalInformation('', '', '', '', '', '', ''),
      ],
      lastYearData: [
      //   {
      //     name: '王曉明',
      //     address: '新竹市中華路123號',
      //     phone: '0912345678',
      //     telephone: 'sdfsdf',
      //     email: 'ming@gmail.com',
      //     line: 'mingming',
      //     wechat: 'mingming',
      //   },
      ],
    };
  },
  computed: {
    personalX(): PersonalInformation[] {
      return this.$store.state.personalInformation;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.personalX.length > 0) {
        this.personal = this.personalX;
      } else if (this.lastYearData[0]) {
        this.personal = this.lastYearData;
      }
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
  .check-area{
    label{
      width: 100%;
      margin-bottom: 10px;
      text-align: left;
      font-weight: 700;
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
