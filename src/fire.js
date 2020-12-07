import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyD75kayjIjo4tJYiGnJ8Auv0dQddQsKo8g",
    authDomain: "milestone3-14b44.firebaseapp.com",
    projectId: "milestone3-14b44",
    storageBucket: "milestone3-14b44.appspot.com",
    messagingSenderId: "972907697412",
    appId: "1:972907697412:web:e38789569724d6a41cec51",
    measurementId: "G-1JZQ2T05K8"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
