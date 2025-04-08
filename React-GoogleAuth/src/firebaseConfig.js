import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArvx73n8WVrQxzetv7G-nFE8ODY5z4peU",
  authDomain: "project-13-auth.firebaseapp.com",
  projectId: "project-13-auth",
  storageBucket: "project-13-auth.firebasestorage.app",
  messagingSenderId: "552451215760",
  appId: "1:552451215760:web:5fb2b81dcf4fe81c9fa315",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
