import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC2WetieBVe0NMa52jJ2SYLQQM08z-8clo",
  authDomain: "fir-38591.firebaseapp.com",
  projectId: "fir-38591",
  storageBucket: "fir-38591.appspot.com",
  messagingSenderId: "200870170341",
  appId: "1:200870170341:web:a07c73fea3d9017d1ece0c",
  measurementId: "G-YQMES6DQD9"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('updatedUser', {user});
  }
  createApp(App).use(store).use(router).mount('#app')
});

