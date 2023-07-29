import React, { createContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// Configura la información de tu proyecto de Firebase
const firebaseConfig = {

    apiKey: "AIzaSyBNxvVqB86uvK5JANiILHv-fR0y2vWLo4A",
  
    authDomain: "localsound-251e9.firebaseapp.com",
  
    projectId: "localsound-251e9",
  
    storageBucket: "localsound-251e9.appspot.com",
  
    messagingSenderId: "1072498885774",
  
    appId: "1:1072498885774:web:8a27e4a95f69fc289935df",
  
    measurementId: "G-C64LEBVJHH"
  
  };    
  
  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const analytics = getAnalytics(app);
