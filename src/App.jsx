import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './component/routes'
// import './App.css'

// import Home from './pages/home/home'
import Contact from './pages/contact/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <Router>
    <Routes path="/contact" element= {<Contact />}></Routes>
   </Router>
    </>
  )
}

export default App
