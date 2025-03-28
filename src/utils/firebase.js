// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBagPNvg1qDEQ5j5UbUg6ySJ0CeCVh_C7k",
  authDomain: "netflix-gpt-66ba2.firebaseapp.com",
  projectId: "netflix-gpt-66ba2",
  storageBucket: "netflix-gpt-66ba2.firebasestorage.app",
  messagingSenderId: "389306448782",
  appId: "1:389306448782:web:6600f686f82cf1238782df",
  measurementId: "G-YCFVRN0SGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();