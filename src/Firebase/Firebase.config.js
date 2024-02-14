// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPwShvFChfM7u8S_grspDjRSS7tIciA4c",
  authDomain: "delax-hotel.firebaseapp.com",
  projectId: "delax-hotel",
  storageBucket: "delax-hotel.appspot.com",
  messagingSenderId: "178494774352",
  appId: "1:178494774352:web:68f9875338b5ed9f088555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app