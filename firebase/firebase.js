// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5M_THxQJFtf2dHus1r0gtLBeaBXAuMbg",
  authDomain: "writer-48fc4.firebaseapp.com",
  projectId: "writer-48fc4",
  storageBucket: "writer-48fc4.appspot.com",
  messagingSenderId: "1013061976536",
  appId: "1:1013061976536:web:caa80d095aaaeb75d872ad"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }