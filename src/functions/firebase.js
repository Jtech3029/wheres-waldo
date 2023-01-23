import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCAKtu9GEkX3yDgo-eAdAfFZCLHsk4NAU",
  authDomain: "wheres-waldo-f450a.firebaseapp.com",
  projectId: "wheres-waldo-f450a",
  storageBucket: "wheres-waldo-f450a.appspot.com",
  messagingSenderId: "839080859825",
  appId: "1:839080859825:web:177be299d2213e73c0aa90",
  measurementId: "G-9SRXQX5BPP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}