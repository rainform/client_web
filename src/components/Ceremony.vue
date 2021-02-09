<template>
  <div class="ceremony">
    <h2>STEP4 法會參加登記</h2>

    <div class="container">
      <table>
        <tr>
          <th>姓名</th>
          <th width="80">
            性別
          </th>
          <th width="80">
            年齡
          </th>
          <th>來寺日期</th>
          <th>離寺日期</th>
          <th>備註</th>
        </tr>
        <tr v-for="(item, key) in ceremony" :key="key">
          <td><input id="ceremony_name" v-model="item.name" type="text" placeholder="姓名"></td>
          <td>
            <select v-model="item.gender" name="genderSelection">
              <option v-for="(selection, index) in genderSelection" :key="index" :value="selection">
                {{ selection }}
              </option>
            </select>
          </td>
          <td><input id="ceremony_age" v-model="item.age" type="number"></td>
          <td><input id="ceremony_comeDate" v-model="item.comeDate" type="date"></td>
          <td><input id="ceremony_backDate" v-model="item.backDate" type="date"></td>
          <td><input id="ceremony_note" v-model="item.note" type="text" placeholder="備註"></td>
          <button v-if="key+1 === ceremony.length" @click="addPerson">
            增加
          </button>
        </tr>
      </table>

      <!-- <form>
        <div class="input-group">
          <label for="ceremony_name">姓名</label>
          <input id="ceremony_name" type="text" v-model="item.name">
        </div>
        <div class="input-group">
          <label for="ceremony_gender">性別</label>
          <input id="ceremony_gender" type="text" v-model="item.gender">
        </div>
        <div class="input-group">
          <label for="ceremony_age">年齡</label>
          <input id="ceremony_age" type="text" v-model="item.age">
        </div>
        <div class="input-group">
          <label for="ceremony_comeDate">來寺日期</label>
          <input id="ceremony_comeDate" type="text" v-model="item.comeDate">
        </div>
        <div class="input-group">
          <label for="ceremony_backDate">離寺日期</label>
          <input id="ceremony_backDate" type="text" v-model="item.backDate">
        </div>
        <div class="input-group">
          <label for="ceremony_note">備註</label>
          <input id="ceremony_note" type="text" v-model="item.note">
        </div>
      </form> -->

      <!-- <div class="check-panel">
        <table>
          <tr>
            <td>姓名</td>
            <td>{{item.name}}</td>
          </tr>
          <tr>
            <td>性別</td>
            <td>{{item.gender}}</td>
          </tr>
          <tr>
            <td>年齡</td>
            <td>{{item.age}}</td>
          </tr>
          <tr>
            <td>來寺日期</td>
            <td>{{item.comeDate}}</td>
          </tr>
          <tr>
            <td>離寺日期</td>
            <td>{{item.backDate}}</td>
          </tr>
          <tr>
            <td>備註</td>
            <td>{{item.note}}</td>
          </tr>
        </table>
      </div> -->
    </div>
    <div class="btn-group">
      <div>
        <a class="btn btn-secondary" @click.prevent="changeStep('prayFor')">
          上一步
        </a>
      </div>
      <div>
        <a class="btn btn-primary" @click.prevent="changeStep('checkForm')">
          下一步
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
    ceremony: {
      type: Array,
      default: () => ([
      ]),
    },
    info: {
      type: Object,
      default: () => ({
        onStep: '',
      }),
    },
  },
  data() {
    return {
      // ceremony: [
      //   new AttendInfo('', '男', '', '', '', ''),
      // ],
      genderSelection: [
        '男',
        '女',
      ],
    };
  },
  methods: {
    addPerson() {
      this.ceremony.push(new AttendInfo('', '男', '', '', '', ''));
    },
    changeStep(name: string) {
      this.info.onStep = name;
    },
  },
});
</script>

<style lang="scss" scoped>
.ceremony{
  // margin: 50px;
  h2{
    padding: 20px;
    margin: 0;
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
      position: absolute;
      bottom: 0;
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
  .btn-group{
    display: flex;
    justify-content: space-between;
  }
}
.container{
  position: relative;
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
