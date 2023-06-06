import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
 
import './index.css'
// import Contact from '../src/pages/contact-us/contactUs'
import BookingForm from './pages/Booking/BookingForm'

// import DropDown from '../src/pages/DropDown/DropDown'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingForm />
  </React.StrictMode>,
)
