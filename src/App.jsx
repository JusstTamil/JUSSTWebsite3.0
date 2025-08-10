import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Ventures from './pages/Ventures'
import ContactPage from './pages/ContactPage'
import Birthday from './pages/Birthday'
import Thanks from './pages/Thanks'
import Videos from './pages/Videos'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/ventures' element={<Ventures />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/birthday' element={<Birthday />} />
          <Route path='/thank-you' element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App