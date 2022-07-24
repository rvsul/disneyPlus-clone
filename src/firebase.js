import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAx3mtMla7UF1OeF_0vuzQRc1t_Vy3optE",
  authDomain: "disneyplus-clone-81676.firebaseapp.com",
  projectId: "disneyplus-clone-81676",
  storageBucket: "disneyplus-clone-81676.appspot.com",
  messagingSenderId: "122901957319",
  appId: "1:122901957319:web:752631ff9d64a0e4ed4ce2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
