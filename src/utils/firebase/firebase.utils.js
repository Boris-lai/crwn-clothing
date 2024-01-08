import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-q29mFaGy_QuU35gZO-u79nHC1l598Qw",
  authDomain: "crwn-clothing-db-52a3a.firebaseapp.com",
  projectId: "crwn-clothing-db-52a3a",
  storageBucket: "crwn-clothing-db-52a3a.appspot.com",
  messagingSenderId: "487505711800",
  appId: "1:487505711800:web:5a463ee2163a791b0d9a4d",
};

initializeApp(firebaseConfig);

// ------------------------------------------------------

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
