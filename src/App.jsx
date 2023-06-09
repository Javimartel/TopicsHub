import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Themes from './pages/Themes'
import Notfound from './pages/NotFound'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import EditProfile from './pages/EditProfile'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="chat/:theme" element={<Chat />} />
      <Route path="themes" element={<Themes />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="edit-profile" element={<EditProfile />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  )
}

export default App
