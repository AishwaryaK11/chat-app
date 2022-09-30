import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUZ94eIweRLJ_koe08KrE5YaKCLqgKuvM",
    authDomain: "chat-app-dee37.firebaseapp.com",
    projectId: "chat-app-dee37",
    storageBucket: "chat-app-dee37.appspot.com",
    messagingSenderId: "868284034788",
    appId: "1:868284034788:web:e92adc5d6ad1a7427946f1",
    measurementId: "G-TX0MR74NCZ"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
