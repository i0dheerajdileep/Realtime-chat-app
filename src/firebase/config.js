import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyCdaMfZVF3LSu19Zq4fbnSJvOLpfnPopNg",
  authDomain: "realtime-chat-app-b4e3e.firebaseapp.com",
  projectId: "realtime-chat-app-b4e3e",
  storageBucket: "realtime-chat-app-b4e3e.appspot.com",
  messagingSenderId: "442819975138",
  appId: "1:442819975138:web:7d5e592f24cc06385fcbbb",
  measurementId: "G-WT4YG5P3XP"
});


const db = getFirestore(app);
const auth = getAuth(app);

export {app,db,auth}
