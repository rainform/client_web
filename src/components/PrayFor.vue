<template>
  <div class="prayFor" :class="{'checkMode': checkMode}">
    <h2>STEP3 往生蓮位登記</h2>
    <div class="container">
      <table>
        <tr>
          <th>陽上設立人姓名</th>
          <th>超薦項目</th>
          <th>超薦先人姓名/地址(選填)</th>
        </tr>
        <tr v-for="(item, key) in prayFor" :key="key">
          <td>
            <input v-if="checkMode === false" id="prayfor_name" v-model="item.registerName" type="text">
            <p v-if="checkMode === true">
              姓名{{ item.registerName }}
            </p>
          </td>
          <td>
            <select v-if="checkMode === false" v-model="item.prayType" name="targetSelection">
              <option v-for="(selection, index) in targetSelection" :key="index" :value="selection">
                {{ selection }}
              </option>
            </select>
            <p v-if="checkMode === true">
              項目{{ item.prayType }}
            </p>
          </td>
          <td>
            <input v-if="checkMode === false" id="prayfor_targetAddress" v-model="item.prayDetail" type="text">
            <p v-if="checkMode === true">
              超薦先人姓名/地址(選填){{ item.prayDetail }}
            </p>
          </td>
          <button v-if="key+1 === prayFor.length && checkMode === false" @click="addPerson">
            增加
          </button>
        </tr>
      </table>
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
    checkMode: {
      type: Boolean,
      default: false,
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
}

.checkMode{
  h2{
    display: none;
  }
  table{
    tr,th,td{
      border: black 1px solid;
    }
    p{
      margin: 0;
    }
  }
  .container{
    .input-group{
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      label{
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
