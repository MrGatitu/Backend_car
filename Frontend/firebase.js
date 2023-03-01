import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyBRkcsGTtOf2xnkDZFd55pl6_t_qz2sxng",
    authDomain: "car-rental-v1-80c1a.firebaseapp.com",
    projectId: "car-rental-v1-80c1a",
    storageBucket: "car-rental-v1-80c1a.appspot.com",
    messagingSenderId: "720718124315",
    appId: "1:720718124315:web:435f9e32c82730bd596fbe",
    measurementId: "G-F4NZJFPG6Z",
    databaseURL: "https://car-rental-v1-80c1a-default-rtdb.firebaseio.com/",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase(app);

  export{database}