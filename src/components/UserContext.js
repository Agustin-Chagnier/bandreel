import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBNxvVqB86uvK5JANiILHv-fR0y2vWLo4A",
  authDomain: "localsound-251e9.firebaseapp.com",
  projectId: "localsound-251e9",
  storageBucket: "localsound-251e9.appspot.com",
  messagingSenderId: "1072498885774",
  appId: "1:1072498885774:web:8a27e4a95f69fc289935df",
  measurementId: "G-C64LEBVJHH"
};

// Inicialización de la aplicación de Firebase y Firebase Analytics
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const loginUser = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  const logoutUser = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      throw new Error('Error al cerrar sesión.');
    }
  };

  const registerUser = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error('Error al crear la cuenta. Inténtalo nuevamente.');
    }
  };

  // Resto del código...

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserContext;
