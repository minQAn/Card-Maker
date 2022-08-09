import firebase from 'firebase';
import firebaseApp from './firebase'; // to use the initialized app

// firebase Docs
// https://firebase.google.com/docs/auth/web/google-signin
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider); // Promise
  }
}

export default AuthService;
