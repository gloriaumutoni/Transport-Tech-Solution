import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './component/routes'
// import './App.css'

import BookingForm from './pages/Booking/BookingForm'


function App() {
   

  return (
    <>
       <BookingForm />
      {/* <Router>
    <Routes path="/contact" element= {<Contact />}></Routes>
   </Router> */}
    </>
  )
}

export default App
