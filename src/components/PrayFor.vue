<template>
  <div class="prayFor" :class="{'checkMode': checkMode}">
    <h2><span>STEP3</span> 往生蓮位登記</h2>
    <div class="container">
      <form v-if="checkMode === false">
        <div v-for="(item, key) in prayFor" :key="key" class="item-object">
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
            <button v-if="key !== prayFor.length" @click.prevent="deletePerson(key)">
              刪除
            </button>
            <button v-if="key+1 === prayFor.length" @click.prevent="addPerson">
              增加
            </button>
          </div>
          <hr>
        </div>
      </form>

      <table v-if="checkMode === true">
        <tr>
          <th>陽上設立人姓名</th>
          <th>超薦項目</th>
          <th>超薦先人姓名/地址(選填)</th>
        </tr>
        <tr v-for="(item, key) in prayFor" :key="key">
          <td v-if="prayForX.length > 0">
            {{ item.registerName }}
          </td>
          <td v-if="prayForX.length > 0">
            {{ item.prayType }}
          </td>
          <td v-if="prayForX.length > 0">
            {{ item.prayDetail }}
          </td>
        </tr>
        <tr v-if="prayForX.length === 0">
          <td colspan="6">
            無填寫
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
        <a class="btn p-0 m-0" @click="pass">
          略過
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
      }
    },
    deletePerson(key: number) {
      this.prayFor.splice(key, 1);
    },
    addPerson() {
      this.prayFor.push(new PrayBoards('', '', ''));
    },
    saveInfo(move: string) {
      this.$store.commit('updatePrayFor', this.prayFor);
      if (move === 'last') {
        this.$router.push('longevity');
      }
      if (move === 'next') {
        this.$router.push('ceremony');
      }
    },
    pass() {
      this.$router.push('ceremony');
    },
  },
});
</script>

<style lang="scss" scoped>
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
