import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js'
import {  getFirestore } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyAL3-S8hta4HHub0uRKeY1l19uI1ifpfuk",
  authDomain: "writing-control.firebaseapp.com",
  projectId: "writing-control",
  storageBucket: "writing-control.appspot.com",
  messagingSenderId: "758398865478",
  appId: "1:758398865478:web:742ca48668fc70abb97a47",
  measurementId: "G-36SX3RLHG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  db,
  auth
}