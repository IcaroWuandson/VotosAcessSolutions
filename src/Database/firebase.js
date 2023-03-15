import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDyNWjX0_79C4feBGrne5pcqDOcFLxuFBw",
  authDomain: "sistemavotos-47217.firebaseapp.com",
  projectId: "sistemavotos-47217",
  storageBucket: "sistemavotos-47217.appspot.com",
  messagingSenderId: "2936001825",
  appId: "1:2936001825:web:7206fad98be34c2e035a60",
  measurementId: "G-RENH479LKG"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
