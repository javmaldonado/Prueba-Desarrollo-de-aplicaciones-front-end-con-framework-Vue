// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuOCAs2MQ06PJZ9NrWV8kPt98C4xuXLzU",
  authDomain: "desafio-frameworkvue.firebaseapp.com",
  projectId: "desafio-frameworkvue",
  storageBucket: "desafio-frameworkvue.appspot.com",
  messagingSenderId: "512054945465",
  appId: "1:512054945465:web:f8f1e5abfc377c8faadd68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app 