import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD1p6lRGjgZOOLVkmbOmzTyZGTl47MnKbw",
    authDomain: "letsupgrade-ab92f.firebaseapp.com",
    projectId: "letsupgrade-ab92f",
    storageBucket: "letsupgrade-ab92f.firebasestorage.app",
    messagingSenderId: "463566882952",
    appId: "1:463566882952:web:4c9167a78e027b4b4ab73d",
    measurementId: "G-JNDPP9L7MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
export default app;
