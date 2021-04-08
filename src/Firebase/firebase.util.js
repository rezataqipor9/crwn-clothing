import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDf_qqyER43J7Y3Npo4fQStP3q-_bQ1ObE",
  authDomain: "crwn-db-4a81e.firebaseapp.com",
  projectId: "crwn-db-4a81e",
  storageBucket: "crwn-db-4a81e.appspot.com",
  messagingSenderId: "1084092007813",
  appId: "1:1084092007813:web:030807fb6b52ce441970ec",
  measurementId: "G-83CG7J9SQJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth()

export const firestore=firebase.firestore()
export const provider = new firebase.auth.GoogleAuthProvider();  
provider.addScope('profile');
provider.addScope('email');
export  const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase

