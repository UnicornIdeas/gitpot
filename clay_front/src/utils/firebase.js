import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBjD5-MT-lSqtQoOc7snVGHHqkSkHjrtMY',
  authDomain: 'clay-netw.firebaseapp.com',
  projectId: 'clay-netw',
  storageBucket: 'clay-netw.appspot.com',
  messagingSenderId: '844980183975',
  appId: '1:844980183975:web:f5dff8df67e0ef043dcc82',
};
firebase.initializeApp(firebaseConfig);

const fs = firebase.firestore();
const mc = fs.collection('models');

export function queryFirestore() {
  // const filters = ['JS', 'NATIVE'];
  // filters.forEach((filter) => {
  // mc.orderBy('downloads').where('downloads', '>=', 500000).get().then((documents) => {
  mc.orderBy('likes', 'desc').orderBy('downloads', 'desc')
    .where('tags', 'array-contains', 'JS')
    .where('likes', '>=', 1500)
    // .where('tags', 'array-contains', 'NATIVE')
    .get()
    .then((documents) => {
      documents.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    });
  // });
}
queryFirestore();

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
