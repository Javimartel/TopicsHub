import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FirebaseContext from './components/contexts/FirebaseContext'
import { auth, getUser, googleLogIn, getThemes, addTheme, sendMessageWith, deleteMessage } from './firebase'

const FirebaseProvider = ({ children }) => {
  const params = { auth, getUser, googleLogIn, getThemes, addTheme, sendMessageWith, deleteMessage }
  
  return (
    <FirebaseContext.Provider value={params}>
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