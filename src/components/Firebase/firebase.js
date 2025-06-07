import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "admin-dashboard-95073.firebaseapp.com",
  projectId: "admin-dashboard-95073",
  storageBucket: "admin-dashboard-95073.appspot.com",
  messagingSenderId: "124372119199",
  appId: "1:124372119199:web:b49eb637672d24aca73caa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
