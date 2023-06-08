import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './component/routes'
// import './App.css'

import Admin from './pages/Admindashboard/admindash'
// import Home from './pages/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <Router>
    <Routes></Routes>
   </Router>
    </>
  )
}

export default App
