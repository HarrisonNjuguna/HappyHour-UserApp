import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBhhXS3QQ9Xa-wosQsnFe_SnpJEr-jBo18",
    authDomain: "happy-hour-rn.firebaseapp.com",
    projectId: "happy-hour-rn",
    storageBucket: "happy-hour-rn.appspot.com",
    messagingSenderId: "698870677735",
    appId: "1:698870677735:web:f7af35d3d308cd4bd4e242",
    measurementId: "G-SNTJBZMD4W"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = app.auth()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { auth, db, timestamp }