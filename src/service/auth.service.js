import firebase from 'firebase';

// firebase Docs
// https://firebase.google.com/docs/auth/web/google-signin
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider); // Promise
  }
}

export default AuthService;
