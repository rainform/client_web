<template>
  <div class="about">
    <div class="layout">
      <div class="ui-side-nav">
        <SideNav :info="info" />
      </div>
      <div class="ui-content">
        <div v-if="info.onStep === 'personal'">
          <Personal :personal="personalInformation" :info="info" />
        </div>
        <div v-if="info.onStep === 'longevity'">
          <Longevity :longevity="longevity" :info="info" />
        </div>
        <div v-if="info.onStep === 'prayFor'">
          <PrayFor :pray-for="prayFor" :info="info" />
        </div>
        <div v-if="info.onStep === 'ceremony'">
          <Ceremony :ceremony="ceremony" :info="info" />
        </div>
        <div v-if="info.onStep === 'checkForm'">
          <CheckForm :info="info" />
        </div>
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
import {
  AttendInfo, CeremonyForm, LongevityBoard, PersonalInformation, PrayBoards,
} from '@/models/CeremonyFormModel';

import SideNav from '../components/SideNav.vue';
import CheckForm from '../components/CheckForm.vue';

export default Vue.extend({
  components: {
    SideNav,
    Personal,
    Longevity,
    PrayFor,
    Ceremony,
    CheckForm,
  },
  data() {
    return {
      info: {
        onStep: 'personal', // 這個可能要存在vuex裡面才不會因重整而不見
      },
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
.layout{
  display: flex;

  .ui-side-nav {
    position: fixed;
    top: 44px;
    left: 0;
    height: calc(100% - 44px);
    background: #f0efef;
    color: #000;
    z-index: 3;
  }
  .ui-content{
    width: calc( 100% - 270px );
    min-height: calc(100% - 44px);
    margin-left: 270px;
    padding: 20px;
    z-index: 0;
  }
}
</style>
