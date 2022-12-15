// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore" ;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmu23xmXXEykpjcL8JbUWHavRJI1lEKmI",
  authDomain: "bookstore105-92020.firebaseapp.com",
  projectId: "bookstore105-92020",
  storageBucket: "bookstore105-92020.appspot.com",
  messagingSenderId: "293177747406",
  appId: "1:293177747406:web:70010f647cf3052a48ad9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore()

export default db 
