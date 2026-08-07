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
  onAuthStateChanged
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

/* ---------------------------------------------------------------------
   Firebase Authentication (Google Sign-In)
   -------------------------------------------------------------------
   - Shows #authLoginScreen when signed out, #mainWrap when signed in.
   - onAuthStateChanged is the single source of truth for the UI state,
     so a page refresh while already signed in goes straight to the
     dashboard instead of flashing the login screen.
--------------------------------------------------------------------- */

const authLoginScreen = document.getElementById('authLoginScreen');
const mainWrap = document.getElementById('mainWrap');
const googleSignInBtn = document.getElementById('googleSignInBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authErrorMsg = document.getElementById('authErrorMsg');
const topnavAvatar = document.getElementById('topnavAvatar');
const topnavUsername = document.getElementById('topnavUsername');
const topnavUserToggle = document.getElementById('topnavUserToggle');
const topnavUserMenu = document.getElementById('topnavUserMenu');

function clearAuthError() {
  if (!authErrorMsg) return;
  authErrorMsg.textContent = '';
  authErrorMsg.hidden = true;
}

function showAuthError(message) {
  if (!authErrorMsg) return;
  authErrorMsg.textContent = message;
  authErrorMsg.hidden = false;
}

/* Maps Firebase Auth error codes to user-friendly messages. Always logs
   the raw code/message to the console for debugging. */
function describeAuthError(error) {
  console.error('Firebase Auth Error:', error && error.code, error && error.message);
  switch (error && error.code) {
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized for Google sign-in. Add it under Firebase Console → Authentication → Settings → Authorized domains.';
    case 'auth/popup-blocked':
      return 'Your browser blocked the sign-in popup. Please allow popups for this site and try again.';
    case 'auth/popup-closed-by-user':
      return 'The sign-in popup was closed before finishing. Please try again.';
    case 'auth/operation-not-allowed':
      return 'Google sign-in is not enabled for this project yet. Enable it in Firebase Console → Authentication → Sign-in method.';
    case 'auth/network-request-failed':
      return 'Network error while signing in. Check your connection and try again.';
    default:
      return 'Something went wrong signing you in. Please try again.';
  }
}

function updateTopNavForUser(user) {
  if (topnavUsername) {
    topnavUsername.textContent = user.displayName || user.email || 'Signed in';
  }
  if (topnavAvatar) {
    if (user.photoURL) {
      topnavAvatar.style.backgroundImage = `url("${user.photoURL}")`;
      topnavAvatar.style.backgroundSize = 'cover';
      topnavAvatar.style.backgroundPosition = 'center';
      topnavAvatar.textContent = '';
    } else {
      topnavAvatar.style.backgroundImage = '';
      const initials = (user.displayName || user.email || 'U').trim().slice(0, 1).toUpperCase();
      topnavAvatar.textContent = initials;
    }
  }
}

function showApp(user) {
  clearAuthError();
  if (authLoginScreen) authLoginScreen.hidden = true;
  if (mainWrap) mainWrap.style.display = '';
  if (user) updateTopNavForUser(user);
}

function showLogin() {
  if (mainWrap) mainWrap.style.display = 'none';
  if (authLoginScreen) authLoginScreen.hidden = false;
  if (topnavUserMenu) topnavUserMenu.classList.remove('open');
}

async function handleGoogleSignIn() {
  clearAuthError();
  if (googleSignInBtn) googleSignInBtn.disabled = true;
  try {
    await signInWithPopup(auth, googleProvider);
    /* onAuthStateChanged fires next and switches to the app UI. */
  } catch (error) {
    showAuthError(describeAuthError(error));
  } finally {
    if (googleSignInBtn) googleSignInBtn.disabled = false;
  }
}

async function handleSignOut() {
  try {
    await signOut(auth);
    /* onAuthStateChanged fires next and switches back to the login screen. */
  } catch (error) {
    console.error('Firebase Sign-Out Error:', error && error.code, error && error.message);
  }
}

if (googleSignInBtn) googleSignInBtn.addEventListener('click', handleGoogleSignIn);
if (logoutBtn) logoutBtn.addEventListener('click', handleSignOut);

/* Small user-menu dropdown toggle for the Logout button, scoped to this
   file so it doesn't collide with script.js's own delegated click handler. */
if (topnavUserToggle && topnavUserMenu) {
  topnavUserToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    topnavUserMenu.classList.toggle('open');
  });
  document.addEventListener('click', (event) => {
    if (!topnavUserMenu.classList.contains('open')) return;
    if (event.target.closest('#topnavUserToggle')) return;
    topnavUserMenu.classList.remove('open');
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    showApp(user);
  } else {
    showLogin();
  }
});

export {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  saveApplicationToFirestore,
  auth,
  googleProvider
};