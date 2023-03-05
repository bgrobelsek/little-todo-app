import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-_nnzHlcX8gAeEILoIYmqpzA8XAoO14Y",
  authDomain: "fir-test-f4ff3.firebaseapp.com",
  projectId: "fir-test-f4ff3",
  storageBucket: "fir-test-f4ff3.appspot.com",
  messagingSenderId: "282031538513",
  appId: "1:282031538513:web:ec1cc929ae1849b4609370"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}