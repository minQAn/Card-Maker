import { firebaseAuth, githubProvider, googleProvider } from './firebase'; // to use the initialized app

// firebase Docs
// https://firebase.google.com/docs/auth/web/google-signin
class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider); // Promise
  }

  logout() {
    firebaseAuth.signOut();
  }

  // callback
  /*
  1. onAuthChange는 <Login>과 <Maker>에 모두 들어가 있다. 
  onAuthChange는 각각 firebase 내장함수인 onAuthStateChanged에서 
  auth의 변경을 감지할 때 실행될 콜백함수를 마치 "event Listener를 
  등록하듯" 전달한다.
  이 말은 useEffect가 실행될 때 onAuthChange안의 "콜백함수가 실행"되는
  것이 아닌, "콜백함수의 등록"이 이루어지고 실제 콜백함수의 작동은 
  authChange 이벤트가 생겼을 떄 일어난다. 

  2. service_auth.js를 별도의 파일에 두는 것은 firebase의 내장함수와
  직결되는 동작을 하는 함수들을 분리하여 관리하는 것이 용이하기 때문이다.
  service_auth는 그 중에서도 authorization과 관련된 작업만 한다.
  */
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
