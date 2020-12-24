import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6AWh-JM5LOafkoQpv9m3_aKl-OydDiQk",
  authDomain: "insta-9814e.firebaseapp.com",
  databaseURL: "https://insta-9814e.firebaseio.com",
  projectId: "insta-9814e",
  storageBucket: "insta-9814e.appspot.com",
  messagingSenderId: "709961029697",
  appId: "1:709961029697:web:295cd096515993ea24cec0",
  measurementId: "G-WVNEJ6E8GQ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };