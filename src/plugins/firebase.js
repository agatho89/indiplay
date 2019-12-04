import Vue from "vue";
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebaseConfig";
import store from "../store/store";

import "firebase/auth";
import "firebase/firestore";
// import router from "../router/router";

firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebase = firebase;

firebase.auth().onAuthStateChanged(function(user) {
  store.dispatch("getUser", user);
  // .then(() => {
  //   if (user) {
  //     router.push("/home");
  //   } else {
  //     router.push("/home");
  //   }
  // });
});
