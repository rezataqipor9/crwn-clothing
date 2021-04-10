import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyDf_qqyER43J7Y3Npo4fQStP3q-_bQ1ObE",
  authDomain: "crwn-db-4a81e.firebaseapp.com",
  projectId: "crwn-db-4a81e",
  storageBucket: "crwn-db-4a81e.appspot.com",
  messagingSenderId: "1084092007813",
  appId: "1:1084092007813:web:030807fb6b52ce441970ec",
  measurementId: "G-83CG7J9SQJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com",
});
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithPopup = () => auth.signInWithPopup(provider);
export const userprofile = async (user, additionalData) => {
  if (!user) return;
  const firestordoc = await firestore.doc(`/users/${user.uid}`);
  const snapshot = await firestordoc.get();

  if (!snapshot.exists) {
    const { email, displayName, uid } = user;
    const createdAt = new Date();
    try {
      firestordoc.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return firestordoc;
};
