import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMHHHlJsr1gvhH2Kj8SXNifodHwKwpai8",
  authDomain: "vvg-little-todo-a0db0.firebaseapp.com",
  projectId: "vvg-little-todo-a0db0",
  storageBucket: "vvg-little-todo-a0db0.appspot.com",
  messagingSenderId: "957834913220",
  appId: "1:957834913220:web:dfda03dcd514d27d067091"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}
