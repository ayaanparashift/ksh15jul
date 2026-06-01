import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUflIDEctxt4GcIlB7TcLJcYXASEEHq5o",
  authDomain: "ksh-infra-otp.firebaseapp.com",
  projectId: "ksh-infra-otp",
  storageBucket: "ksh-infra-otp.firebasestorage.app",
  messagingSenderId: "824942275707",
  appId: "1:824942275707:web:de18f743ba055add6c46de",
  measurementId: "G-TPR8W77PYH",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
