<template>
  <div class="longevity">
    <h2>STEP2 長生祿位登記</h2>
    <div class="container">
      <form>
        <div v-for="(item, key) in longevity" :key="key" class="input-group" type="text">
          <label for="longevity_name">長生祿位<span v-if="longevity.length > 1"> - {{ key+1 }}</span></label>
          <input id="longevity_name" v-model="item.name" type="text" placeholder="請輸入人名">
          <button v-if="key+1 === longevity.length" @click="addPerson">
            增加
          </button>
        </div>
      </form>
      <!-- <div class="check-panel">
        <table>
          <tr v-for="(item, key) in longevity" :key="key" type="text">
            <td>長生祿位<span v-if="longevity.length > 1">{{key+1}}</span></td>
            <td>{{item.name}}</td>
          </tr>
        </table>
      </div> -->
    </div>
    <div class="btn-group">
      <div>
        <a class="btn btn-secondary" @click.prevent="changeStep('personal')">
          上一步
        </a>
      </div>
      <div>
        <a class="btn btn-primary" @click.prevent="changeStep('prayFor')">
          下一步
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { LongevityBoard } from '@/models/CeremonyFormModel';
import Vue from 'vue';

export default Vue.extend({
  props: {
    longevity: {
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
      // longevity: [
      //   new LongevityBoard(''),
      // ],
    };
  },
  methods: {
    addPerson() {
      this.longevity.push(new LongevityBoard(''));
    },
    changeStep(name: string) {
      this.info.onStep = name;
    },
  },
});
</script>

<style lang="scss" scoped>
.longevity{
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
