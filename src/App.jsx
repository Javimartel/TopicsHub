import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Chat from './components/Chat'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="chat" element={ <Chat /> } />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
