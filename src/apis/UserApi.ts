import FireBaseUtils from '@/libs/FirebaseUtils';
import firebase from 'firebase';
import store from '@/store';

export default class UserApi {
  static async save() {
    const db = firebase.firestore();
    const user = FireBaseUtils.safeGetUser();

    if (store.state.userStatus) {
      await db.collection('users').doc(user.uid).set(store.state.userStatus);
    }
  }

  static async load() {
    const db = firebase.firestore();
    const user = FireBaseUtils.safeGetUser();
    const docSnp = await db.collection('users').doc(user.uid).get();

    const doc = docSnp.data();

    if (doc) {
      store.commit('updateUserStatus', doc);
    }
  }
}
