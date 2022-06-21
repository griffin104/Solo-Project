import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App'

const el = document.getElementById('app')

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/test' element={<App />} />
    </Routes>
  </BrowserRouter>,
  el)