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
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

async function signInWithGoogle() {
  await setPersistence(auth, browserLocalPersistence);
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

function signOutFirebase() {
  return signOut(auth);
}

function subscribeToAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}

async function saveApplicationToFirestore(application) {
  if (!application || typeof application !== 'object') {
    throw new Error('Invalid application object passed to saveApplicationToFirestore');
  }
  const company = String(application.company || '').trim();
  const applicationDoc = {
    company,
    companyNormalized: company.toLowerCase(),
    jobTitle: String(application.jobTitle || application.title || '').trim(),
    matchScore: Number(application.matchScore || 0),
    status: String(application.status || '').trim(),
    source: String(application.source || '').trim(),
    jobUrl: String(application.applicationUrl || application.applyUrl || application.jobUrl || '').trim(),
    retryCount: Number(application.retryCount || 0),
    failureReason: String(application.failureReason || '').trim(),
    manualActionReason: String(application.manualActionReason || '').trim(),
    createdAt: serverTimestamp(),
    applicationDate: String(application.date || application.applicationDate || '').trim(),
    workflowRunId: application.runId || null
  };
  return addDoc(collection(db, 'applications'), applicationDoc);
}
window.saveApplicationToFirestore = saveApplicationToFirestore;
window.auth = auth;
window.signInWithGoogle = signInWithGoogle;
window.signOutFirebase = signOutFirebase;
window.subscribeToAuthState = subscribeToAuthState;

export {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  auth,
  signInWithGoogle,
  signOutFirebase,
  subscribeToAuthState,
  saveApplicationToFirestore
};