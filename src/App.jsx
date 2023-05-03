import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/chat/Chat'
import Themes from './pages/Themes'
import Notfound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="chat/:theme" element={<Chat />} />
      <Route path="themes" element={<Themes />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  )
}

export default App
