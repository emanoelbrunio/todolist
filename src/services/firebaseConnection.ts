// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPWqz-_2_PDfyK5Lh0-0FJM_g_y3Gsh-Y",
  authDomain: "todolist-b8a9e.firebaseapp.com",
  projectId: "todolist-b8a9e",
  storageBucket: "todolist-b8a9e.appspot.com",
  messagingSenderId: "213276522812",
  appId: "1:213276522812:web:6960c33507deb2419d4639",
  measurementId: "G-91WT96T95G",
};

const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);

export { auth };
