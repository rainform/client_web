<template>
  <div class="prayFor" :class="{'checkMode': checkMode}">
    <h2><span>STEP3</span> 往生蓮位登記</h2>
    <div class="container">
      <form v-if="checkMode === false">
        <div class="status-remind">
          <p>資料自動代入 (第一次登入者不適用)</p>
        </div>
        <div class="checkbox-input">
          <input id="prayfor_none" v-model="notRegistered" type="checkbox">
          <label for="prayfor_none">不登記</label>
        </div>

        <div v-for="(item, key) in prayFor" :key="key" class="item-object" :class="{'not-registered': notRegistered}">
          <div class="input-group" type="text">
            <label for="prayfor_name">陽上設立人姓名</label>
            <input id="prayfor_name" v-model="item.registerName" type="text" placeholder="請輸入人名">
          </div>
          <div class="input-group" type="text">
            <label>超薦項目</label>
            <select v-model="item.prayType" name="targetSelection">
              <option value="" style="display:none">
                請選擇
              </option>
              <option v-for="(selection, index) in targetSelection" :key="index" :value="selection">
                {{ selection }}
              </option>
            </select>
          </div>
          <div class="input-group" type="text">
            <label for="prayfor_targetAddress">超薦先人姓名/地址(選填)</label>
            <input id="prayfor_targetAddress" v-model="item.prayDetail" type="text" placeholder="請輸入人名或地址">
          </div>
          <button v-if="prayFor.length !== 1 && key !== prayFor.length" class="delete-person" @click.prevent="deletePerson(key)">
            <i class="fas fa-times" />
          </button>
          <button v-if="key+1 === prayFor.length" class="add-person" @click.prevent="addPerson">
            增加
          </button>
          <hr>
        </div>
      </form>

      <table v-if="checkMode === true">
        <tr v-if="prayForX.length > 0 && prayForX[0].registerName === ''">
          <th>不登記</th>
        </tr>
        <tr v-if="prayForX.length > 0 && prayForX[0].registerName !== ''">
          <th>陽上設立人姓名</th>
          <th>超薦項目</th>
          <th>超薦先人姓名/地址(選填)</th>
        </tr>
        <tr v-for="(item, key) in prayForX" :key="key">
          <td>
            {{ item.registerName }}
          </td>
          <td>
            {{ item.prayType }}
          </td>
          <td>
            {{ item.prayDetail }}
          </td>
        </tr>
      </table>
    </div>

    <div v-if="checkMode === true" class="btn-group-fix">
      <div>
        <router-link to="prayFor" class="btn btn-dark btn-sm">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PrayBoards } from '@/models/CeremonyFormModel';
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
      prayFor: [
        new PrayBoards('', '', ''),
      ],
      targetSelection: [
        '冤親債主',
        '歷代祖先',
        '累世父母師長',
        '未出生子女',
        '誤殺誤傷之眾生',
        '境內一切眾生(地基主)',
      ],
      sameAsLastYear: false,
      notRegistered: false,
      lastYearData: [
      //   {
      //     registerName: 'string',
      //     prayType: '冤親債主',
      //     prayDetail: 'string',
      //   },
      //   {
      //     registerName: 'string',
      //     prayType: '累世父母師長',
      //     prayDetail: 'string',
      //   },
      //   {
      //     registerName: 'string',
      //     prayType: '境內一切眾生(地基主)',
      //     prayDetail: 'string',
      //   },
      ],
    };
  },
  computed: {
    prayForX(): PrayBoards[] {
      return this.$store.state.prayFor;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.prayForX.length > 0) {
        this.prayFor = this.prayForX;
      } else if (this.lastYearData[0]) {
        this.prayFor = this.lastYearData;
      }
    },
    deletePerson(key: number) {
      this.prayFor.splice(key, 1);
    },
    addPerson() {
      this.prayFor.push(new PrayBoards('', '', ''));
    },
    saveInfo(move: string) {
      if (this.notRegistered === false) {
        this.$store.commit('updatePrayFor', this.prayFor);
      } else {
        this.$store.commit('updatePrayFor', [new PrayBoards('', '', '')]);
      }
      if (move === 'last') {
        this.$router.push('longevity');
      }
      if (move === 'next') {
        this.$router.push('ceremony');
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$remind: rgb(204, 0, 0);
.prayFor{
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
    .checkbox-input{
      margin-bottom: 20px;
      text-align: left;
      label{
        margin-left: 20px;
      }
    }
    .item-object{
      position: relative;
      .input-group{
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
      }
      button{
        position: absolute;
        border: none;
        &:focus{
          outline: none;
        }
      }
      .add-person{
        bottom: 20px;
        right: -70px;
        width: 60px;
        padding: 3px 0;
        font-weight: 700;
        border-radius: 50px;
        background-color: #eee;
        &:hover{
          background-color: #ddd;
        }
      }
      .delete-person{
        top: 0px;
        left: -40px;
        background-color: transparent;
        color: #aaa;
        &:hover{
          background-color: #eee;
        }
      }
    }
    .not-registered{
      display: none;
    }
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
