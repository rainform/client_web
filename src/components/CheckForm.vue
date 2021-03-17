<template>
  <div class="checkForm">
    <h2>STEP5 確認完整資料</h2>
    <hr>
    <div>
      <Personal :check-mode="checkMode" />
    </div>
    <hr>
    <div>
      <Longevity :check-mode="checkMode" />
    </div>
    <hr>
    <div>
      <PrayFor :check-mode="checkMode" />
    </div>
    <hr>
    <div>
      <Ceremony :check-mode="checkMode" />
    </div>
    <hr>
    <div class="btn-group">
      <div>
        <button class="btn btn-secondary" @click="saveForm">
          暫存
        </button>
      </div>
      <div>
        <button class="btn btn-danger" @click="saveForm">
          完成送出
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Personal from '@/components/PersonalInformation.vue';
import Longevity from '@/components/Longevity.vue';
import Ceremony from '@/components/Ceremony.vue';
import PrayFor from '@/components/PrayFor.vue';
import FormApi from '@/apis/FormApi';

export default Vue.extend({
  components: {
    Personal,
    Longevity,
    PrayFor,
    Ceremony,
  },
  data() {
    return {
      checkMode: true,
      // form: new CeremonyForm(),
    };
  },
  methods: {
    saveForm() {
      FormApi.save().then(() => {
        this.$router.push('/successful');
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.checkForm{
  h2{
    padding: 20px;
    margin: 0;
  }
}

.check-panel{
  background-color: rgb(255, 240, 197);
  table, td{
    border: 1px solid rgb(100, 100, 100);
  }
  td{
    text-align: left;
    padding: 5px;
    width: 100px;
  }
}

</style>
