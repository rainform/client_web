import firebase from 'firebase';

const db = firebase.firestore();

interface AuthUserModel {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

export default class UserApi {
  static async initUser(user: AuthUserModel): Promise<void> {
    // create an empty form
    // const docRef = await db.collection('forms').add({});

    const {
      uid, displayName, email, photoURL,
    } = user;

    return db.collection('users').doc(uid).set({
      profile: {
        displayName,
        email,
        photoURL,
      },
      // form: docRef.id,
    });
  }

  static async get(userId: string): Promise<void> {
    const docRef = await db.collection('users').doc(userId).get();

    console.log(docRef.data());
  }
}
