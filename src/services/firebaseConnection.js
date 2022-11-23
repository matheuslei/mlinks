import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcdXTsRqpS0P6WMHwaK3nrF37tVQDgaTY",
  authDomain: "mlinks-43dfe.firebaseapp.com",
  projectId: "mlinks-43dfe",
  storageBucket: "mlinks-43dfe.appspot.com",
  messagingSenderId: "65095605452",
  appId: "1:65095605452:web:57c4378549e6abf2bf7669",
  measurementId: "G-KFMQLNYKX7",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
