<template>
  <div class="longevity" :class="{'checkMode': checkMode}">
    <h2><span>STEP2</span> 長生祿位登記</h2>
    <div class="container">
      <form v-if="checkMode === false">
        <div class="status-remind">
          <p>資料自動代入 (第一次登入者不適用)</p>
        </div>
        <div class="checkbox-input">
          <input id="longevity_none" v-model="notRegistered" type="checkbox">
          <label for="longevity_none">不登記</label>
        </div>
        <div
          v-for="(item, key) in longevity"
          :key="key"
          :class="{'not-registered': notRegistered}"
          class="input-group"
        >
          <label for="longevity_name">長生祿位</label>
          <input id="longevity_name" v-model="item.name" class="form-control" type="text" placeholder="請輸入人名">
          <div v-if="key !== longevity.length && checkMode === false" class="input-group-prepend">
            <span class="input-group-text"><i v-if="longevity.length !== 1" class="fas fa-times-circle" @click.prevent="deletePerson(key)" /></span>
          </div>

          <button v-if="key+1 === longevity.length && checkMode === false" @click="addPerson">
            增加
          </button>
        </div>
      </form>

      <div v-if="checkMode === true" class="check-area">
        <label v-if="longevityX.length > 0 && longevityX[0].name !== ''">長生祿位</label>
        <label v-if="longevityX.length > 0 && longevityX[0].name === ''">不登記</label>
        <div v-if="longevityX.length > 0 && longevityX[0].name !== ''" class="list">
          <div v-for="(item, key) in longevityX" :key="key">
            <p>
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="checkMode === true" class="btn-group-fix">
      <div>
        <router-link to="longevity" class="btn btn-dark btn-sm">
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
import { LongevityBoard } from '@/models/CeremonyFormModel';
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
      longevity: [
        new LongevityBoard(''),
      ],
      notRegistered: false,
      lastYearData: [
      //   {
      //     streamId: '',
      //     name: '王曉明',
      //   },
      //   {
      //     streamId: '',
      //     name: '王中明',
      //   },
      //   {
      //     streamId: '',
      //     name: '王大明',
      //   },
      ],
    };
  },
  computed: {
    longevityX(): LongevityBoard[] {
      return this.$store.state.longevity;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.longevityX.length > 0) {
        this.longevity = this.longevityX;
      } else if (this.lastYearData[0]) {
        this.longevity = this.lastYearData;
      }
    },
    addPerson() {
      this.longevity.push(new LongevityBoard(''));
    },
    deletePerson(key: number) {
      this.longevity.splice(key, 1);
    },
    saveInfo(move: string) {
      if (this.notRegistered === false) {
        this.$store.commit('updateLongevity', this.longevity);
      } else {
        this.$store.commit('updateLongevity', [new LongevityBoard('')]);
      }
      if (move === 'last') {
        this.$router.push('personalInformation');
      }
      if (move === 'next') {
        this.$router.push('prayFor');
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$remind: rgb(204, 0, 0);

.longevity{
  position: relative;
  h2{
    padding: 20px;
    margin: 0;
  }
  form{
    width: 50%;
    margin: auto;
    padding: 20px;
    .checkbox-input{
      margin-bottom: 20px;
      text-align: left;
      label{
        margin-left: 20px;
      }
    }
    .status-remind{
      p{
        text-align: left;
        font-size: 0.8rem;
        color: $remind;
      }
    }
    .input-group{
      position: relative;
      margin-bottom: 20px;
      label{
        width: 100%;
        margin-bottom: 10px;
        text-align: left;
        font-weight: 700;
      }
      .form-control, .input-group-text{
        border:none;
        background-color: #eee;
        border-radius: 5px;
        padding: 3px 10px;
        box-shadow: none;
        height: auto;
      }
      .form-control{
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      .input-group-text{
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        color: #aaa;
        .fas{
          cursor: pointer;
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
    .not-registered{
      display: none;
    }
  }
  .check-area{
    label{
      width: 100%;
      margin-bottom: 10px;
      text-align: left;
      font-weight: 700;
    }
    .list{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      p {
        margin-right: 20px;
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
