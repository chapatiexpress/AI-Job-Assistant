import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAI65ygEtmMaG2K05tuTPhIxqSR_lSkLN0",
  authDomain: "ai-job-assistant-13fb3.firebaseapp.com",
  projectId: "ai-job-assistant-13fb3",
  storageBucket: "ai-job-assistant-13fb3.firebasestorage.app",
  messagingSenderId: "213063602860",
  appId: "1:213063602860:web:49655968e34787e24d0509"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp
};