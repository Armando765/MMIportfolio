// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import firebase from "firebase";


Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAi9pdBph7YLyQjVdsEN-y0qy3cBs1HHww",
  authDomain: "testauth-25951.firebaseapp.com",
  projectId: "testauth-25951",
  storageBucket: "testauth-25951.appspot.com",
  messagingSenderId: "89162948169",
  appId: "1:89162948169:web:b27c7a6230978e8dd3a998"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




let app;

firebase.auth().onAuthStateChanged(user=> {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
