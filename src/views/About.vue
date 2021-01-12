<template>
  <div class="about">
    <h1>This is a form.</h1>
    <Personal :personal="personalInformation"/>
    <Longevity :longevity="longevity"/>
    <PrayFor :prayFor="prayFor"/>
    <Ceremony :ceremony="ceremony"/>
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
  data() {
    return {
      personalInformation: [
        new PersonalInformation('', '', '', '', '', '', ''),
      ],
      longevity: [
        new LongevityBoard('peoplename'),
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
  components: {
    Personal,
    Longevity,
    PrayFor,
    Ceremony,
  },
});
</script>
