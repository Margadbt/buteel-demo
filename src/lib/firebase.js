// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqPv1NAjn8FEyGcOhEGu4qCCNOpyzKHAI",
  authDomain: "buteel-app.firebaseapp.com",
  projectId: "buteel-app",
  storageBucket: "buteel-app.appspot.com",
  messagingSenderId: "302240159620",
  appId: "1:302240159620:web:b9adfe2499438b3eef2fd1",
  measurementId: "G-0K0HS23H8Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


const analytics = getAnalytics(app);