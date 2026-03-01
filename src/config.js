import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDgiawhjRnn-2-pzyJdZ0LG-Eetj3vXydE",
  authDomain: "zivora-web-ff44a.firebaseapp.com",
  projectId: "zivora-web-ff44a",
  storageBucket: "zivora-web-ff44a.firebasestorage.app",
  messagingSenderId: "679389359311",
  appId: "1:679389359311:web:1854af40192621f6915bba",
  measurementId: "G-QJ5F9XQ7Y3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);