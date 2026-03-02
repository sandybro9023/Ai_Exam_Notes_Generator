import React, { use } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/auth'
export const serverUrl = "http://localhost:8000"
import { getCurrentUser } from './services/api'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>


    </>
  )
}

export default App