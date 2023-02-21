// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
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
const firestore = getFirestore(app);

//Get Data
async function readASingleDocument(id){
    const data = doc(firestore, "TwitchUsers/"+id);//TwitchUsers/user_id
    const mySnapshot = await getDoc(data);
    if(mySnapshot.exists()){
        const docData = mySnapshot.data();
        document.body.innerHTML = JSON.stringify(docData);
    }
}

//Set Data
function writeDocument(id){
    const data = doc(firestore, "TwitchUsers/"+id);//TwitchUsers/user_id
    const docData ={
        GrabbedPoints : {
            Efesto : 10,
            micheleposa : 70
        }
    }
    setDoc(data, docData, {merge : true});
}


async function readIDFromMap(ip){

    //get Ip
    var ipConnection = doc(firestore, "AddressMap/" + ip);
    const mySnapshot = await getDoc(ipConnection);
    if(mySnapshot.exists()){
        const docData = mySnapshot.data();
        document.body.innerHTML = JSON.stringify(docData);
    }
}


window.onload = function(){

    switch(window.location.href.toString().split("?")[1].split("=")[0]){

        case "IDfromIP":
            readIDFromMap(window.location.href.toString().split("=")[1]);
            break;

        case "IPChange":
            break;

        case "GetData":
            readASingleDocument(window.location.href.toString().split("=")[1]);
            break;

        case "PutData":
            writeDocument(window.location.href.toString().split("=")[1]);
            break;

    }
    
}