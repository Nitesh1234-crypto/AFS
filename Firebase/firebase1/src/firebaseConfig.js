// https://dummy-e0d4e-default-rtdb.asia-southeast1.firebasedatabase.app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZnyMqLVKMv3CObR1R9GbFfwlaQu-bl4Y",
  authDomain: "dummy-e0d4e.firebaseapp.com",
  projectId: "dummy-e0d4e",
  databaseURL: "https://dummy-e0d4e-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "dummy-e0d4e.appspot.com",
  messagingSenderId: "479415156506",
  appId: "1:479415156506:web:aed9123dd20c3d85a376a3",
  measurementId: "G-B7BZL66ZKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
