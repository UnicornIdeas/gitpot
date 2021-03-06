import firebase from 'firebase/compat/app';
import Vue from 'vue';
import moment from 'moment';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store/store.js';

Vue.prototype.moment = moment;

const firebaseConfig = {
  apiKey: 'AIzaSyBjD5-MT-lSqtQoOc7snVGHHqkSkHjrtMY',
  authDomain: 'clay-netw.firebaseapp.com',
  projectId: 'clay-netw',
  storageBucket: 'clay-netw.appspot.com',
  messagingSenderId: '844980183975',
  appId: '1:844980183975:web:f5dff8df67e0ef043dcc82',
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

Vue.use(vuetify);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
