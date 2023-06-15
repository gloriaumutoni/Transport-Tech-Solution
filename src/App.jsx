import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './component/routes'
 

import BookingForm from './pages/Booking/BookingForm'


function App() {
   

  return (
    <>
       <BookingForm />
      <Router>
    <Routes path="/book-here" element= {<BookingForm />}></Routes>
   </Router>
    </>
  )
}

export default App
