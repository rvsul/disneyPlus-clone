import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB09TIIvEHLNIYVP06CEFay_zngXqSBMyU",
  authDomain: "disney-clone-2bd67.firebaseapp.com",
  projectId: "disney-clone-2bd67",
  storageBucket: "disney-clone-2bd67.appspot.com",
  messagingSenderId: "132597009252",
  appId: "1:132597009252:web:de4361b79ef3cb10fe0871",
  measurementId: "G-QT1PMPXW55",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
