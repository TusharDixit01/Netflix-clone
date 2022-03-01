import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBdb4K1ZPt_JdjnvX8TNQ76Y_pFl6aZ4Os",
    authDomain: "netflix-81047.firebaseapp.com",
    projectId: "netflix-81047",
    storageBucket: "netflix-81047.appspot.com",
    messagingSenderId: "77884326989",
    appId: "1:77884326989:web:a5ae66ff7f018261d78804",
    measurementId: "G-P3BWY0HRVD"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;