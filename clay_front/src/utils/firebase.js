import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

export function login() {
  const provider = new GithubAuthProvider();

  const auth = getAuth();
  return signInWithPopup(auth, provider);
  // .then((result) => {
  //   const credential = GithubAuthProvider.credentialFromResult(result);
  //   console.log(result);
  //   console.log(credential);
  //   console.log(result.user);
  // }).catch((error) => {
  //   console.log(error);
  // });
}

export function getUser() {
  const auth = getAuth();
  return auth.currentUser;
}
