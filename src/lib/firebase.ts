import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWhQbqAb5FGzXMa7Mlz9vpPMjL2E1RHWA",
  authDomain: "rovolto-web.firebaseapp.com",
  projectId: "rovolto-web",
  storageBucket: "rovolto-web.firebasestorage.app",
  messagingSenderId: "423753486711",
  appId: "1:423753486711:web:0768520c92d6e4628cd172",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
