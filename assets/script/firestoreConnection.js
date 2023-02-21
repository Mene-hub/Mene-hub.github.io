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

// Get a document, forcing the SDK to fetch from the offline cache.
try {
  const doc = await getDocFromCache(docRef);

  // Document was found in the cache. If no cached document exists,
  // an error will be returned to the 'catch' block below.
  console.log("Cached document data:", doc.data());
} catch (e) {
  console.log("Error getting cached document:", e);
}