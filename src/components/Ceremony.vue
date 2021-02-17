<template>
  <div class="ceremony" :class="{'checkMode': checkMode}">
    <h2>STEP4 法會參加登記</h2>

    <div class="container">
      <table>
        <tr>
          <th>姓名</th>
          <th v-if="checkMode === false" width="80">
            性別
          </th>
          <th v-if="checkMode === false" width="80">
            年齡
          </th>
          <th v-if="checkMode === true">
            性別
          </th>
          <th v-if="checkMode === true">
            年齡
          </th>
          <th>來寺日期</th>
          <th>離寺日期</th>
          <th>備註</th>
        </tr>
        <tr v-for="(item, key) in ceremony" :key="key">
          <td>
            <input v-if="checkMode === false" id="ceremony_name" v-model="item.name" type="text" placeholder="姓名">
            <p v-if="checkMode === true">
              name{{ item.name }}
            </p>
          </td>
          <td>
            <select v-if="checkMode === false" v-model="item.gender" name="genderSelection">
              <option v-for="(selection, index) in genderSelection" :key="index" :value="selection">
                {{ selection }}
              </option>
            </select>
            <p v-if="checkMode === true">
              gender{{ item.gender }}
            </p>
          </td>
          <td>
            <input v-if="checkMode === false" id="ceremony_age" v-model="item.age" type="number">
            <p v-if="checkMode === true">
              age{{ item.age }}
            </p>
          </td>
          <td>
            <input v-if="checkMode === false" id="ceremony_comeDate" v-model="item.comeDate" type="date">
            <p v-if="checkMode === true">
              comeDate{{ item.comeDate }}
            </p>
          </td>
          <td>
            <input v-if="checkMode === false" id="ceremony_backDate" v-model="item.backDate" type="date">
            <p v-if="checkMode === true">
              backDate{{ item.backDate }}
            </p>
          </td>
          <td>
            <input v-if="checkMode === false" id="ceremony_note" v-model="item.note" type="text" placeholder="備註">
            <p v-if="checkMode === true">
              note{{ item.note }}
            </p>
          </td>
          <button v-if="key+1 === ceremony.length && checkMode === false" @click="addPerson">
            增加
          </button>
        </tr>
      </table>
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
    checkMode: {
      type: Boolean,
      default: false,
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
