// import { useState } from 'react'
import { BrowserRouter as Router } from 'React-router-dom'

import Routes from './component/routes'
// import './App.css'
// import Login from '../src/pages/login.jsx'
// import Signup from '../src/pages/signup'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/>
      <Login/>
      <Signup/> */}
      <Router>
    <Routes></Routes>
   </Router>
    </>
  )
}

export default App
