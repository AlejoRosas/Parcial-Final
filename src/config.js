import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB-r3U-4YWHYPZqwPbjgHXP9EldGXXkngk",
  authDomain: "instagram-3c762.firebaseapp.com",
  projectId: "instagram-3c762",
  storageBucket: "instagram-3c762.appspot.com",
  messagingSenderId: "409542601574",
  appId: "1:409542601574:web:a804cd2cd38820956b76a7",
  measurementId: "G-VNBMJYTNVX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebase};





