import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAczo8fAcHP_jdDQBx4zVHMrAg7CXF0WjY",
  authDomain: "filmyapp-22c7b.firebaseapp.com",
  projectId: "filmyapp-22c7b",
  storageBucket: "filmyapp-22c7b.appspot.com",
  messagingSenderId: "1083714782518",
  appId: "1:1083714782518:web:86976e63e7006472eddf97",
  measurementId: "G-5XWLBF6S47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const moviesRef = collection(db, "movies");
 export const reviewsRef = collection(db, "reviews");
 export const usersRef = collection(db, "users");
export default app;