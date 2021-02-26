<template>
  <div class="login-page">
    <div class="container">
      <div class="login-block">
        <div v-if="!openRegister" class="content">
          <h2>會員登入</h2>
          <div class="input-group">
            <input id="user_id" v-model="userId" type="text" placeholder="請輸入帳號">
          </div>
          <div class="input-group">
            <input id="user_password" v-model="userPassword" type="password" placeholder="請輸入密碼">
          </div>
          <div class="btn-area">
            <button class="btn register-btn" @click="register">
              註冊新帳號
            </button>
            <button class="btn login-btn" @click="login">
              登入
            </button>
          </div>
        </div>
        <div v-if="openRegister" class="content">
          <h2>註冊新帳號</h2>
          <div class="input-group">
            <input v-model="registerId" type="text" placeholder="請輸入帳號">
          </div>
          <div class="input-group">
            <input v-model="registerPassword" type="password" placeholder="請輸入密碼">
          </div>
          <div class="input-group">
            <input v-model="checkRegisterPassword" type="password" placeholder="請再次輸入密碼">
          </div>
          <div class="btn-area">
            <button class="btn back-btn" @click="backToLogin">
              已有帳號
            </button>
            <button class="btn register-btn" @click="backToLogin">
              註冊
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
  },
  data() {
    return {
      openRegister: false,
      userId: '',
      userPassword: '',
      registerId: '',
      registerPassword: '',
      checkRegisterPassword: '',
    };
  },
  methods: {
    login() {
      console.log('login');
      this.$router.push('/form/personalInformation');
      this.userId = '';
      this.userPassword = '';
    },
    register() {
      console.log('register');
      this.openRegister = true;
      this.userId = '';
      this.userPassword = '';
    },
    backToLogin() {
      console.log('backToLogin');
      this.openRegister = false;
      this.registerId = '';
      this.registerPassword = '';
      this.checkRegisterPassword = '';
    },
  },
});
</script>

<style lang="scss" scoped>
.login-page{
  // background: #fff url("../assets/123.jpg") no-repeat;
  // background-size: cover;
  min-height: calc(100vh - 44px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#000;
  .login-block{
    max-width: 600px;
    min-height: 500px;
    border: rgba(119, 119, 119, 0.4) 2px solid;
    border-radius: 10px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
      padding: 20px;
      h2{
        padding-bottom: 20px;
        margin-bottom: 40px;
        border-bottom: 1px solid #aaa;
        color: #777;
      }
      .input-group{
        margin-bottom: 40px;
        input{
          width: 80%;
          margin: auto;
          border: 0;
          padding: 0;
          border-bottom: solid #aaa 1px;
          padding-bottom: 5px;
          color: #777;
          &:focus{
            outline: none;
          }
        }
      }
      .btn-area{

        .btn{
          font-size: 1.2rem;
          font-weight: 700;
          background-color: #ccc;
          width: 190px;
          &:focus{
            outline: none;
            box-shadow: none;
          }
          &:hover{
            background-color: #555;
            color: #fff;
          }
          margin: 5px;
        }
        // .btn + .btn{
        //   margin-left: 20px;
        // }
        .register-btn{
          &:hover{
            background-color: rgb(158, 48, 48);
          }
        }
      }
    }
  }
}

</style>
