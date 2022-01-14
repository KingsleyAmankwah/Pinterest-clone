// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdq4Ta5ilP20R5k2pyXgMiABQb-0rCvS0",
  authDomain: "pinterest-clone-f4cab.firebaseapp.com",
  projectId: "pinterest-clone-f4cab",
  storageBucket: "pinterest-clone-f4cab.appspot.com",
  messagingSenderId: "1074290299203",
  appId: "1:1074290299203:web:a923e68cb133b7b426dff6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
