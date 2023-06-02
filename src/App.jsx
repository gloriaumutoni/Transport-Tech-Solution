import { useState } from 'react'
import './App.css'

import Booking from './pages/booking/Booking';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Booking/>
    </>
  )
}

export default App
