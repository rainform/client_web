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
        <router-link to="#" class="btn btn-secondary">
          暫存
        </router-link>
      </div>
      <div>
        <router-link to="#" class="btn btn-danger">
          完成送出
        </router-link>
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
