<template>
  <div class="about" style="text-align: left;">
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

export default Vue.extend({
  data() {
    return {
      personalInformation: {
        uid: 'afas001451',
        name: '',
        address: '',
        phone: '',
        telephone: '',
        email: '',
        line: '',
        wechat: '',
      },
      longevity: [
        {
          id: '',
          name: '',
        },
      ],
      prayFor: [
        {
          name: '',
          targetSelection: [
            '冤親債主',
            '歷代祖先',
            '累世父母師長',
            '未出生子女',
            '誤殺誤傷之眾生',
            '境內一切眾生(地基主)(請填寫住家地址)',
          ],
          targetValue: '45678979',
          targetName: '',
          targetAddress: '',
        },
      ],
      ceremony: [
        {
          name: '',
          gender: '',
          age: '',
          comeDate: '',
          backDate: '',
          note: '',
        },
      ],
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
