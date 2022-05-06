// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfvSLvnfSW7b1qpFGFbAjx21txRk9livk",
  authDomain: "assignment-11-18a82.firebaseapp.com",
  projectId: "assignment-11-18a82",
  storageBucket: "assignment-11-18a82.appspot.com",
  messagingSenderId: "841545912205",
  appId: "1:841545912205:web:065f2e24dc01a5072c77c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);

export default app;