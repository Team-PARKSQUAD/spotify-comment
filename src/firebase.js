// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB1H5qs4kiw7E4ibjKVdCi8xIxz06a3p8s",
    authDomain: "spotify-00.firebaseapp.com",
    projectId: "spotify-00",
    storageBucket: "spotify-00.appspot.com",
    messagingSenderId: "942999250325",
    appId: "1:942999250325:web:b14f14fd4c9fd96adb029c",
    measurementId: "G-P9F7THCNTF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};