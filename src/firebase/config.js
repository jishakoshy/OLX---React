import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAajtjqTLQN_1jRXyUbEip1X4KuJ_GjCGs",
    authDomain: "reactjs-olx-37735.firebaseapp.com",
    projectId: "reactjs-olx-37735",
    storageBucket: "reactjs-olx-37735.appspot.com",
    messagingSenderId: "526140758118",
    appId: "1:526140758118:web:08dc0765f1d94c7b26b5a7",
    measurementId: "G-YGQV16S8GV"
  };

  export default firebase.initializeApp(firebaseConfig)