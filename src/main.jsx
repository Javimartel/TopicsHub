import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FirebaseContext from './components/contexts/firebaseContext'
import { auth, db, sendMessageWith } from './firebase'

const FirebaseProvider = ({ children }) => {
  return (
    // AUTH Y DB DEBERÍAN ESTAR EN PARÁMETROS
    // AUTH TAMBIEN PUEDE SER OTRO PROVIDER Y QUE SOLO DEVUELVA UN USER DIRECTAMENTE
    <FirebaseContext.Provider value={{ auth, db, sendMessageWith }}>
      {children}
    </FirebaseContext.Provider>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)