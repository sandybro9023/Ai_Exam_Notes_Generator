import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authexamnotes-639b7.firebaseapp.com",
  projectId: "authexamnotes-639b7",
  storageBucket: "authexamnotes-639b7.firebasestorage.app",
  messagingSenderId: "742825735824",
  appId: "1:742825735824:web:7361c6233f35e9e2d00a15"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider };