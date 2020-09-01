import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD-ft5V9R9qLCoZpSCwFYgDhjYpa6HSZqs",
  authDomain: "fir-319ab.firebaseapp.com",
  databaseURL: "https://fir-319ab.firebaseio.com",
  projectId: "fir-319ab",
  storageBucket: "fir-319ab.appspot.com",
  messagingSenderId: "728792064123",
  appId: "1:728792064123:web:a9611443b0d159db5dc2de",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
const store = firebase.storage();
export { auth, database, store };
