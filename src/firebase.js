import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAg73L-MG55XkWAA3SLB6zl0sY9-MnYG7A",
    authDomain: "lisa-new-lms-tp.firebaseapp.com",
    projectId: "lisa-new-lms-tp",
    storageBucket: "lisa-new-lms-tp.firebasestorage.app",
    messagingSenderId: "994448187004",
    appId: "1:994448187004:web:6c947a52c86041985273f9",
    measurementId: "G-CY3YY269N4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
export default app;
