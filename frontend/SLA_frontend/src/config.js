// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjFaE3Srw8wFHvV9m5NuXi_xlHMWwdRlg",
  authDomain: "sla1-4be6a.firebaseapp.com",
  projectId: "sla1-4be6a",
  storageBucket: "sla1-4be6a.appspot.com",
  messagingSenderId: "526747012708",
  appId: "1:526747012708:web:eaa9af9723ec1797509971",
  measurementId: "G-X4FHJVPQBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;