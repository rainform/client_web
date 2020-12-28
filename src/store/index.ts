import Vue from 'vue';
import Vuex from 'vuex';
import {
  AttendInfo, LongevityBoard, PersonalInformation, PrayBoards,
} from '@/models/CeremonyFormModel';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personalInformation: [] as PersonalInformation[],
    longevity: [] as LongevityBoard[],
    prayFor: [] as PrayBoards[],
    ceremony: [] as AttendInfo[],
    homepageRoute: '/success',
  },
  mutations: {
    updatePersonalInformation(state, object) {
      state.personalInformation = object;
    },
    updateLongevity(state, array) {
      state.longevity = array;
    },
    updatePrayFor(state, array) {
      state.prayFor = array;
    },
    updateCeremony(state, array) {
      state.ceremony = array;
    },
  },
  actions: {
  },
  modules: {
  },
});
