import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Ventures from './pages/Ventures'
import ContactPage from './pages/ContactPage'
import Birthday from './pages/Birthday'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/ventures' element={<Ventures />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/birthday' element={<Birthday />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App