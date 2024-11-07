// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDuLMgfIZMumJ7_mMVgNQbZ3nkgUxoU_FM",
//   authDomain: "trackstatscomments.firebaseapp.com",
//   projectId: "trackstatscomments",
//   storageBucket: "trackstatscomments.firebasestorage.app",
//   messagingSenderId: "855297850051",
//   appId: "1:855297850051:web:2a51fdaec7b8620edc8076"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDuLMgfIZMumJ7_mMVgNQbZ3nkgUxoU_FM",
    authDomain: "trackstatscomments.firebaseapp.com",
    projectId: "trackstatscomments",
    storageBucket: "trackstatscomments.firebasestorage.app",
    messagingSenderId: "855297850051",
    appId: "1:855297850051:web:2a51fdaec7b8620edc8076"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };