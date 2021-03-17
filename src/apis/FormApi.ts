import firebase from 'firebase';
import store from '@/store';
import Utils from '@/libs/Utils';

export default class FormApi {
  // no use
  static async create(formContent: object): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> {
    const db = firebase.firestore();
    const docRef = await db.collection('forms').add(formContent);
    return docRef;
  }

  static async save(): Promise<void> {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;

    if (!user) {
      // No user is signed in.
      // TODO: redirect user to login page
      throw new Error();
    }

    const formContent = {
      owner: user.uid,
      personalInformation: { ...store.state.personalInformation },
      longevity: Utils.toObject(store.state.longevity),
      prayFor: Utils.toObject(store.state.prayFor),
      ceremony: Utils.toObject(store.state.ceremony),
    };

    // User is signed in.'
    const formId = user.uid;
    await db.collection('forms').doc(formId).set(formContent);
  }

  static async merge(formId: string, formContent: object): Promise<void> {
    // pass
  }

  /**
   *
   * @returns look https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot?authuser=0
   */
  static async get(): Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>> {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;

    if (!user) {
      // No user is signed in.
      // TODO: redirect user to login page
      throw new Error();
    }

    // User is signed in.'
    const formId = user.uid;
    const docSnp = await db.collection('forms').doc(formId).get();
    return docSnp;
  }

  /**
   *
   * @returns look https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot?authuser=0
   */
  static async load(): Promise<void> {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;

    if (!user) {
      // No user is signed in.
      // TODO: redirect user to login page
      throw new Error();
    }

    // User is signed in.'
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

  // static async makeCopy(formId: string): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> {
  //   // pass
  // }
}
