import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMHHHlJsr1gvhH2Kj8SXNifodHwKwpai8",
  authDomain: process.env.AUTH_DOMAIN,
  // projectId cannot be an .env
  projectId: "vvg-little-todo-a0db0",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MSID,
  appId: process.env.APP_ID
};

app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}
