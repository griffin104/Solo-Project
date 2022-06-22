import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './pages/App/App.js'
import Tft from './pages/Tft/Tft.js'
import store from './store.js'

const el = document.getElementById('app')
const root = createRoot(el)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/tft' element={<Tft />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
