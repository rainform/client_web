<template>
  <div class="ceremony" :class="{'checkMode': checkMode}">
    <h2><span>STEP4</span> 法會參加登記</h2>

    <div class="container">
      <form v-if="checkMode === false">
        <div v-for="(item, key) in ceremony" :key="key" class="item-object">
          <div class="input-group" type="text">
            <label for="ceremony_name">姓名</label>
            <input id="ceremony_name" v-model="item.name" type="text" placeholder="姓名">
          </div>
          <div class="input-group" type="text">
            <label>性別</label>
            <select v-model="item.gender" name="genderSelection">
              <option value="" style="display:none">
                請選擇
              </option>
              <option v-for="(selection, index) in genderSelection" :key="index" :value="selection">
                {{ selection }}
              </option>
            </select>
          </div>
          <div class="input-group" type="text">
            <label for="ceremony_age">年齡</label>
            <input id="ceremony_age" v-model="item.age" type="number" placeholder="年齡" min="1">
          </div>
          <div class="input-group" type="text">
            <label for="ceremony_comeDate">來寺日期</label>
            <input id="ceremony_comeDate" v-model="item.comeDate" type="date">
          </div>
          <div class="input-group" type="text">
            <label for="ceremony_backDate">離寺日期</label>
            <input id="ceremony_backDate" v-model="item.backDate" type="date">
          </div>
          <div class="input-group" type="text">
            <label for="ceremony_note">備註</label>
            <input id="ceremony_note" v-model="item.note" type="text" placeholder="備註">
            <button v-if="key !== ceremony.length" @click.prevent="deletePerson(key)">
              刪除
            </button>
            <button v-if="key+1 === ceremony.length" @click.prevent="addPerson">
              增加
            </button>
          </div>
          <hr>
        </div>
      </form>

      <table v-if="checkMode === true">
        <tr>
          <th>姓名</th>
          <th>性別</th>
          <th>年齡</th>
          <th>來寺日期</th>
          <th>離寺日期</th>
          <th>備註</th>
        </tr>
        <tr v-for="(item, key) in ceremony" :key="key">
          <td v-if="ceremonyX.length > 0">
            {{ item.name }}
          </td>
          <td v-if="ceremonyX.length > 0">
            {{ item.gender }}
          </td>
          <td v-if="ceremonyX.length > 0">
            {{ item.age }}
          </td>
          <td v-if="ceremonyX.length > 0">
            {{ item.comeDate }}
          </td>
          <td v-if="ceremonyX.length > 0">
            {{ item.backDate }}
          </td>
          <td v-if="ceremonyX.length > 0">
            {{ item.note }}
          </td>
        </tr>
        <tr v-if="ceremonyX.length === 0">
          <td colspan="6">
            不參加
          </td>
        </tr>
      </table>
    </div>

    <div v-if="checkMode === true" class="btn-group-fix">
      <div>
        <router-link to="ceremony" class="btn btn-dark btn-sm">
          修改
        </router-link>
      </div>
    </div>
    <div v-if="checkMode === false" class="btn-group">
      <div>
        <a class="btn btn-secondary" @click="saveInfo('last')">
          上一步
        </a>
      </div>
      <div>
        <a class="btn btn-primary" @click="saveInfo('next')">
          下一步
        </a>
        <a class="btn p-0 m-0" @click="pass">
          略過
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AttendInfo } from '@/models/CeremonyFormModel';
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
      ceremony: [
        new AttendInfo('', '', '', '', '', ''),
      ],
      genderSelection: [
        '男',
        '女',
      ],
    };
  },
  computed: {
    ceremonyX(): AttendInfo[] {
      return this.$store.state.ceremony;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.ceremonyX.length > 0) {
        this.ceremony = this.ceremonyX;
      }
    },
    deletePerson(key: number) {
      this.ceremony.splice(key, 1);
    },
    addPerson() {
      this.ceremony.push(new AttendInfo('', '', '', '', '', ''));
    },
    saveInfo(move: string) {
      this.$store.commit('updateCeremony', this.ceremony);
      if (move === 'last') {
        this.$router.push('prayFor');
      }
      if (move === 'next') {
        this.$router.push('checkForm');
      }
    },
    pass() {
      this.$router.push('checkForm');
    },
  },
});
</script>

<style lang="scss" scoped>
.ceremony{
  position: relative;
  h2{
    padding: 20px;
    margin: 0;
  }
  form{
    width: 50%;
    margin: auto;
    padding: 20px;
    .input-group{
      position: relative;
      margin-bottom: 20px;
      label{
        width: 100%;
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
      button{
        position: absolute;
        bottom: 0;
        right: -70px;
        font-weight: 700;
        width: 60px;
        background-color: #eee;
        border: 0;
        border-radius: 50px;
        padding: 3px 0;
        &:focus{
          outline: none;
        }
        &:hover{
          background-color: #ddd;
        }
      }
    }
  }
  table{
    width: 90%;
    margin: auto;
    margin-bottom: 40px;
    th, td{
      text-align: left;
      padding-right: 20px;
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
    button{
      font-weight: 700;
      width: 60px;
      background-color: #eee;
      border: 0;
      border-radius: 50px;
      padding: 3px 0;
      &:focus{
        outline: none;
      }
      &:hover{
        background-color: #ddd;
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
    table{
      margin: 0;
    }
  }
}

</style>
