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
  apiKey: "AIzaSyCddeV_CjP9Eh3uVRz8SfZrfvZcVJIG-AA",
  authDomain: "mmiportfolio-b4b7a.firebaseapp.com",
  projectId: "mmiportfolio-b4b7a",
  storageBucket: "mmiportfolio-b4b7a.appspot.com",
  messagingSenderId: "231130404524",
  appId: "1:231130404524:web:c2cc47cb4e4ab6c145f109"
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
