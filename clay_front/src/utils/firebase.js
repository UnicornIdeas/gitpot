import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

export function login() {
  const provider = new GithubAuthProvider();

  const auth = getAuth();
  return signInWithPopup(auth, provider);
}

export function getUser() {
  const auth = getAuth();
  return auth.currentUser;
}
