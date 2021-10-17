import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

export function login() {
  const provider = new GithubAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      console.log(result);
      console.log(credential);
      console.log(result.user);
    }).catch((error) => {
      console.log(error);
    });
}
