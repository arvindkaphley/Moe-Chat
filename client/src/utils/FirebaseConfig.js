import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJs0ACKvcUIZESLLEArkCBXgQVWoY6i8I",
    authDomain: "moe-chat-84efd.firebaseapp.com",
    projectId: "moe-chat-84efd",
    storageBucket: "moe-chat-84efd.appspot.com",
    messagingSenderId: "995027597929",
    appId: "1:995027597929:web:a48a26de162cb238ac00f8",
    measurementId: "G-HD9E9WQ3DM"
};

const app=initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);