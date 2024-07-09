// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGOuSkdZUXbShWm0K__6mKSeM1oTNptnQ",
  authDomain: "portfolio-gjygs.firebaseapp.com",
  projectId: "portfolio-gjygs",
  storageBucket: "portfolio-gjygs.appspot.com",
  messagingSenderId: "251751648001",
  appId: "1:251751648001:web:9c5da8c142736460bfe900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);



// Initialize Firestore
const db = getFirestore(app);

export { db, storage };