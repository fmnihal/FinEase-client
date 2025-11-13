// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA8gCpCfVIujCk32p-z8yqMmOhG87Y6mU",
  authDomain: "fin-ease-14e74.firebaseapp.com",
  projectId: "fin-ease-14e74",
  storageBucket: "fin-ease-14e74.firebasestorage.app",
  messagingSenderId: "809743975125",
  appId: "1:809743975125:web:610b2f6fc12ddb2396185c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export the auth service
export const auth= getAuth(app);