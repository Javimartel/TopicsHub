import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Chat from './components/Chat'
import Themes from './components/Themes'
import Notfound from './components/NotFound'

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
