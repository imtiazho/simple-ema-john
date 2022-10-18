// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfml7JsbhyCzUaYuCRzfMmhxLB6wzDeT8",
    authDomain: "ema-jhon-ecommerce-shop.firebaseapp.com",
    projectId: "ema-jhon-ecommerce-shop",
    storageBucket: "ema-jhon-ecommerce-shop.appspot.com",
    messagingSenderId: "68824439819",
    appId: "1:68824439819:web:744014e24b0110964dfb0e"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;