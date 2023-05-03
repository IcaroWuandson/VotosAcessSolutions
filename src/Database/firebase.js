import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';



const firebaseConfig = {
  apiKey: "AIzaSyDyNWjX0_79C4feBGrne5pcqDOcFLxuFBw",
  authDomain: "sistemavotos-47217.firebaseapp.com",
  databaseURL: "https://sistemavotos-47217-default-rtdb.firebaseio.com",
  projectId: "sistemavotos-47217",
  storageBucket: "sistemavotos-47217.appspot.com",
  messagingSenderId: "2936001825",
  appId: "1:2936001825:web:7206fad98be34c2e035a60",
  measurementId: "G-RENH479LKG"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const database = firebase.database();

export { app, auth, firestore, database };