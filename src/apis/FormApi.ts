import firebase from 'firebase';

const db = firebase.firestore();

export default class FormApi {
  static async create(formContent: object): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> {
    const docRef = await db.collection('forms').add(formContent);
    return docRef;
  }

  static async set(formId: string, formContent: object): Promise<void> {
    await db.collection('forms').doc(formId).set(formContent);
  }

  static async merge(formId: string, formContent: object): Promise<void> {
    // pass
  }

  /**
   *
   * @param formId
   * @returns look https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot?authuser=0
   */
  static async get(formId: string): Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>> {
    const docSnp = await db.collection('forms').doc(formId).get();
    return docSnp;
  }

  static async makeCopy(formId: string): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> {
    // pass
  }
}
