import firebase from 'firebase';
import store from '@/store';
import Utils from '@/libs/Utils';
import FireBaseUtils from '@/libs/FirebaseUtils';

export default class FormApi {
  /**
   * @description upload form document in vuex store to firestore
   *
   */
  static async save(isSubmitted = false): Promise<void> {
    const db = firebase.firestore();
    const user = FireBaseUtils.safeGetUser();

    const formContent = {
      owner: user.uid,
      personalInformation: { ...store.state.personalInformation },
      longevity: Utils.toObject(store.state.longevity),
      prayFor: Utils.toObject(store.state.prayFor),
      ceremony: Utils.toObject(store.state.ceremony),
      isSubmitted,
      submitTime: new Date().toISOString(),
    };

    const formId = user.uid;
    await db.collection('forms').doc(formId).set(formContent);
  }

  /**
   * @description get form document from firestore for current login user, then load the document into vuex store
   *
   * the result object obtained by get() is DocumentSnapshot
   * (@see https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot?authuser=0)
   */
  static async load(): Promise<void> {
    const db = firebase.firestore();
    const user = FireBaseUtils.safeGetUser();

    const formId = user.uid;
    const docSnp = await db.collection('forms').doc(formId).get();
    const doc = docSnp.data();

    if (doc) {
      store.commit('updatePersonalInformation', doc.personalInformation);
      store.commit('updateLongevity', doc.longevity);
      store.commit('updatePrayFor', doc.prayFor);
      store.commit('updateCeremony', doc.ceremony);
    }
  }
}
