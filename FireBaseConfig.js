import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5UegjWFYKU9yRV2rjZKlAYq-Yb9aQhGg",
    authDomain: "xadrez-crud.firebaseapp.com",
    databaseURL: "https://xadrez-crud-default-rtdb.firebaseio.com",
    projectId: "xadrez-crud",
    storageBucket: "xadrez-crud.firebasestorage.app",
    messagingSenderId: "931589115872",
    appId: "1:931589115872:web:09339609d447fd0ec76585",
    measurementId: "G-V6S36WMS1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);