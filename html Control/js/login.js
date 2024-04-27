import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js'


 
// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyAL3-S8hta4HHub0uRKeY1l19uI1ifpfuk",
  authDomain: "writing-control.firebaseapp.com",
  projectId: "writing-control",
  storageBucket: "writing-control.appspot.com",
  messagingSenderId: "758398865478",
  appId: "1:758398865478:web:742ca48668fc70abb97a47",
  measurementId: "G-36SX3RLHG5"
};
 
// 初始化 Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
 
// 監聽表單提交事件
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault(); // 防止表單提交
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  signInWithEmailAndPassword(auth, username, password)
    .then(userCredential => {
      // 登入成功
      const user = userCredential.user;
      console.log(`登入成功，使用者 ID：${user.uid}`);
    })
    .catch(error => {
      // 登入失敗
      console.error(`登入失敗，原因：${error.message}`);
    });
});
