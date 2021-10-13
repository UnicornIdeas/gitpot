import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

// import firebase from 'firebase'
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBjD5-MT-lSqtQoOc7snVGHHqkSkHjrtMY",
//   authDomain: "clay-netw.firebaseapp.com",
//   projectId: "clay-netw",
//   storageBucket: "clay-netw.appspot.com",
//   messagingSenderId: "844980183975",
//   appId: "1:844980183975:web:f5dff8df67e0ef043dcc82"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

Vue.use(vuetify)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
