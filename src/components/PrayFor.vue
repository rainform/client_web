<template>
  <div class="prayFor">
    <h2>STEP3 往生蓮位登記</h2>
    <div class="container">
      <table>
        <tr>
          <th>陽上設立人姓名</th>
          <th>超薦項目</th>
          <th>超薦先人姓名/地址(選填)</th>
        </tr>
        <tr v-for="(item, key) in prayFor" :key="key">
          <td><input id="prayfor_name" v-model="item.registerName" type="text"></td>
          <td>
            <select v-model="item.prayType" name="targetSelection">
              <option v-for="(selection, key) in targetSelection" :key="key" :value="selection">
                {{ selection }}
              </option>
            </select>
          </td>
          <td><input id="prayfor_targetAddress" v-model="item.prayDetail" type="text"></td>
          <button v-if="key+1 === prayFor.length" @click="addPerson">
            增加
          </button>
        </tr>
      </table>
      <!-- <form>
        <div class="input-group">
          <label for="prayfor_name">陽上設立人姓名</label>
          <input id="prayfor_name" type="text" v-model="item.registerName">
        </div>
        <div class="input-group">
          <label>超薦項目</label>
          <select name="targetSelection" v-model="item.prayType">
            <option :value="selection" v-for="(selection, key) in targetSelection" :key="key">
              {{selection}}
            </option>
          </select>
        </div>
        <div class="input-group">
          <label for="prayfor_targetAddress">超薦先人姓名/地址</label>
          <input id="prayfor_targetAddress" type="text" v-model="item.prayDetail">
        </div>
        <button v-if="key+1 === prayFor.length" @click="addPerson">增加</button>
      </form> -->

      <!-- <div class="check-panel">
        <table>
          <tr>
            <td>陽上設立人姓名</td>
            <td>{{item.registerName}}</td>
          </tr>
          <tr>
            <td>超薦項目</td>
            <td>{{item.prayType}}</td>
          </tr>
          <tr>
            <td>超薦人姓名/地址</td>
            <td>{{item.prayDetail}}</td>
          </tr>
        </table>
      </div> -->
    </div>
    <div class="btn-group">
      <div>
        <a class="btn btn-secondary" @click.prevent="changeStep('longevity')">
          上一步
        </a>
      </div>
      <div>
        <a class="btn btn-primary" @click.prevent="changeStep('ceremony')">
          下一步
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PrayBoards } from '@/models/CeremonyFormModel';
import Vue from 'vue';

export default Vue.extend({
  props: {
    prayFor: {
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
      // prayFor: [
      //   new PrayBoards('', '冤親債主', ''),
      // ],
      targetSelection: [
        '冤親債主',
        '歷代祖先',
        '累世父母師長',
        '未出生子女',
        '誤殺誤傷之眾生',
        '境內一切眾生(地基主)',
      ],
    };
  },
  methods: {
    addPerson() {
      this.prayFor.push(new PrayBoards('', '冤親債主', ''));
    },
    changeStep(name: string) {
      this.info.onStep = name;
    },
  },
});
</script>

<style lang="scss" scoped>
.prayFor{
  // margin: 50px;
  h2{
    padding: 20px;
    margin: 0;
  }
  table{
    width: 80%;
    margin: auto;
    margin-bottom: 40px;
    th, td{
      text-align: left;
      padding-right: 20px;
    }
    input, select{
      width: 90%;
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
