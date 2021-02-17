<template>
  <div class="longevity" :class="{'checkMode': checkMode}">
    <h2>STEP2 長生祿位登記</h2>
    <div class="container">
      <form>
        <div v-for="(item, key) in longevity" :key="key" class="input-group" type="text">
          <label for="longevity_name">長生祿位<span v-if="longevity.length > 1"> - {{ key+1 }}</span></label>
          <input v-if="checkMode === false" id="longevity_name" v-model="item.name" type="text" placeholder="請輸入人名">
          <button v-if="key+1 === longevity.length && checkMode === false" @click="addPerson">
            增加
          </button>
          <p v-if="checkMode === true">
            人名{{ item.name }}
          </p>
        </div>
      </form>
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
    checkMode: {
      type: Boolean,
      default: false,
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
}

.checkMode{
  h2{
    display: none;
  }
  .container{
    .input-group{
      border: black 1px solid;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      label{
        border-right: black 1px solid;
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
