// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrxQfX7CABNNSOoay5TJpZZAq-DWxiGME",
    authDomain: "login-f182c.firebaseapp.com",
    projectId: "login-f182c",
    storageBucket: "login-f182c.appspot.com",
    messagingSenderId: "135172095858",
    appId: "1:135172095858:web:a6eaa651e8a77c7b2227eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)