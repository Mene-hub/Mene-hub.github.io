// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocFromCache, doc  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAECsSdaPzaagW0UvNc2s7Kni4ExQ_n_dw",
  authDomain: "twitchpointsgrabber.firebaseapp.com",
  projectId: "twitchpointsgrabber",
  storageBucket: "twitchpointsgrabber.appspot.com",
  messagingSenderId: "199524742067",
  appId: "1:199524742067:web:201494189c3f81feadd1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const docRef = doc(db, "TwitchUsers","431682373");

db.collection("TwitchUsers").get().then((snapshop) => {
    console.log(snapshot.docs);
});