import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './component/routes'
import './App.css'
import Login from '../src/pages/login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <Login/>
      <Router>
    <Routes></Routes>
   </Router>
    </>
  )
}

export default App
