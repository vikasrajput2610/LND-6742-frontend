import React, { useState } from 'react'
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Sucess from './components/Sucess.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/success" element={<Sucess />} />
    </Routes>
    <Toaster/>
  </BrowserRouter>
  )
}

export default App;