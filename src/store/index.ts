import Vue from 'vue';
import Vuex from 'vuex';
import {
  AttendInfo, LongevityBoard, PersonalInformation, PrayBoards,
} from '@/models/CeremonyFormModel';
import UserStatus from '@/models/UserStatusModel';

Vue.use(Vuex);
const getDefaultState = () => ({
  userStatus: new UserStatus(),
  personalInformation: new PersonalInformation(),
  longevity: [] as LongevityBoard[],
  prayFor: [] as PrayBoards[],
  ceremony: [] as AttendInfo[],
  homepageRoute: '/personalHomepage',
});
export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    updateUserStatus(state, userStatus) {
      state.userStatus = userStatus;
    },
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
    resetState(state) {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
  },
  modules: {
  },
});
