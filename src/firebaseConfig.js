// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRnaCsMXGCPaQRQxl35ZntEWabCBNv-qs",
  authDomain: "all-india-tour-2e087.firebaseapp.com",
  projectId: "all-india-tour-2e087",
  storageBucket: "all-india-tour-2e087.appspot.com", // ✅ Corrected
  messagingSenderId: "1010145121221",
  appId: "1:1010145121221:web:b0b6f4ec7b4508e64ab1ac",
  measurementId: "G-5F0D15LDEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth, RecaptchaVerifier, signInWithPhoneNumber };
export default app;
