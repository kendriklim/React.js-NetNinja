import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJf-D2p3tmrYw-wt3mmo_c6x99k87Cks0",
  authDomain: "net-ninja-marioplan-c1e4d.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-c1e4d.firebaseio.com",
  projectId: "net-ninja-marioplan-c1e4d",
  storageBucket: "net-ninja-marioplan-c1e4d.appspot.com",
  messagingSenderId: "384410492407",
  appId: "1:384410492407:web:570407ea2b4b3f578622f2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
