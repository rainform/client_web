import firebase from 'firebase';

export default class FireBaseUtils {
  static safeGetUser(): firebase.User {
    const user = firebase.auth().currentUser;

    if (!user) {
      // No user is signed in.
      // TODO: redirect user to login page
      throw new Error();
    }

    return user;
  }
}
