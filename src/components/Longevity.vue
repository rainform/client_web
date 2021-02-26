<template>
  <div class="longevity" :class="{'checkMode': checkMode}">
    <h2><span>STEP2</span> 長生祿位登記</h2>
    <div class="container">
      <form>
        <div v-for="(item, key) in longevity" :key="key" class="input-group" type="text">
          <label for="longevity_name">長生祿位</label>
          <input v-if="checkMode === false" id="longevity_name" v-model="item.name" type="text" placeholder="請輸入人名">
          <button v-if="key+1 === longevity.length && checkMode === false" @click="addPerson">
            增加
          </button>
          <div v-if="checkMode === true">
            <p>
              {{ item.name }}
            </p>
          </div>
        </div>
      </form>
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
        <a class="btn p-0 m-0" @click="pass">
          略過
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
      }
    },
    addPerson() {
      this.longevity.push(new LongevityBoard(''));
    },
    saveInfo(move: string) {
      this.$store.commit('updateLongevity', this.longevity);
      if (move === 'last') {
        this.$router.push('personalInformation');
      }
      if (move === 'next') {
        this.$router.push('prayFor');
      }
    },
    pass() {
      this.$router.push('prayFor');
    },
  },
});
</script>

<style lang="scss" scoped>
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
