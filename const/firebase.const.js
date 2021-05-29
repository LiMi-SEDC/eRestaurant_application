const firebase = require("firebase");

const config = {
  apiKey: "AIzaSyByJMPHHZpjmsRh4bky_xEEe9HmnwPrawI",
  authDomain: "erestaurantapp-18fbd.firebaseapp.com",
  projectId: "erestaurantapp-18fbd",
  storageBucket: "erestaurantapp-18fbd.appspot.com",
  messagingSenderId: "176676728952",
  appId: "1:176676728952:web:26a18be8d435c3bf7afd8d",
  measurementId: "G-F0GR0M73FZ",
};

const app = firebase.initializeApp(config);

if (!process.firebase) {
  process.firebase = app;
} else {
  console.log("Firebase connection already established!");
}

module.exports = app;
