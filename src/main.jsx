import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FirebaseProvider } from './contexts/FirebaseContext'
import {
  auth,
  getUser,
  googleLogIn,
  createUser,
  updateProfileWith,
  logIn,
  getThemes,
  addTheme,
  uploadFileAndGetURL,
  sendMessageWith,
  getMessages,
  deleteMessage,
  getAdmins
} from "./infrastructure/firebase";

const firebaseProviderContext = { auth, getUser, googleLogIn, createUser, updateProfileWith, logIn, getThemes, addTheme, uploadFileAndGetURL, sendMessageWith, getMessages, deleteMessage, getAdmins }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider value={firebaseProviderContext}>
        <App />
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
