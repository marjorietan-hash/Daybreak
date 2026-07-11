// =============================================================
//  Daybreak Tracker — Firebase configuration
//  Paste your Firebase *web app* config below (Project settings →
//  General → Your apps → SDK setup and configuration → Config).
//  These values are NOT secret — they identify your project and are
//  safe to commit. Access is protected by Firestore security rules
//  + the shared login (see README).
//
//  IMPORTANT: each program gets its OWN Firebase project. Do NOT reuse
//  the BMI MD (or any other program's) config — that would put both
//  programs in the same database. Create a fresh project for Daybreak
//  first (see README → One-time setup).
// =============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyDofz1ufiufVrQ-m3hm_iNJ31NE_HA-OFg",
  authDomain: "daybreak-bb80b.firebaseapp.com",
  projectId: "daybreak-bb80b",
  storageBucket: "daybreak-bb80b.firebasestorage.app",
  messagingSenderId: "886055382868",
  appId: "1:886055382868:web:57881ae2a37df2b32422c1",
  measurementId: "G-SQDDJG0RZC"
};

// The single shared account the whole team signs in with.
// Create this user in Firebase Console → Authentication → Users
// (provider: Email/Password). The team enters ONLY the password on
// the login screen; this email is used behind the scenes.
export const SHARED_EMAIL = "team@daybreak-tracker.app";

// Firestore location of the shared tracker document.
// Keep the id unique per program (e.g. the program slug).
export const DOC_PATH = { collection: "trackers", id: "daybreak" };
