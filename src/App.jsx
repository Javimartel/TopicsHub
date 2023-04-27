import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Chat from './components/Chat'
import Themes from './components/Themes'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="chat/:theme" element={<Chat />} />
      <Route path="themes" element={<Themes />} />
      <Route path="*" element={
        <div className='h-screen flex flex-col justify-center items-center text-2xl'>
          <h1>404</h1>
          <Link to="/">Go Home</Link>
        </div>
      } />
    </Routes>
  )
}

export default App
