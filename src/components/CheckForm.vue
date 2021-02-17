<template>
  <div class="checkForm">
    <h2>STEP5 確認完整資料</h2>
    <div>
      <Personal :personal="personalInformation" :info="info" :check-mode="checkMode" />
    </div>
    <div>
      <Longevity :longevity="longevity" :info="info" :check-mode="checkMode" />
    </div>
    <div>
      <PrayFor :pray-for="prayFor" :info="info" :check-mode="checkMode" />
    </div>
    <div>
      <Ceremony :ceremony="ceremony" :info="info" :check-mode="checkMode" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Personal from '@/components/PersonalInformation.vue';
import Longevity from '@/components/Longevity.vue';
import Ceremony from '@/components/Ceremony.vue';
import PrayFor from '@/components/PrayFor.vue';
import {
  AttendInfo, CeremonyForm, LongevityBoard, PersonalInformation, PrayBoards,
} from '@/models/CeremonyFormModel';

export default Vue.extend({
  // props: {
  //   personal: {
  //     type: Array,
  //     default: () => ({
  //       name: '',
  //       address: '',
  //       phone: '',
  //       telephone: '',
  //       email: '',
  //       line: '',
  //       wechat: '',
  //     }),
  //   },
  // },
  components: {
    Personal,
    Longevity,
    PrayFor,
    Ceremony,
  },
  data() {
    return {
      info: {
        onStep: 'personal', // 這個可能要存在vuex裡面才不會因重整而不見
      },
      checkMode: true,
      personalInformation: [
        new PersonalInformation('', '', '', '', '', '', ''),
      ],
      longevity: [
        new LongevityBoard(''),
      ],
      prayFor: [
        new PrayBoards('', '', ''),
      ],
      ceremony: [
        new AttendInfo('', '', '', '', '', ''),
      ],
      form: new CeremonyForm(),
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
