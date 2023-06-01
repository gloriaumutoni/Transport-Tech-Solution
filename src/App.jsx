
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './component/routes'
// import './App.css'
// import Admin1 from './pages/Admindashboard/admindash2'
// import Home from './pages/home/home'
function App() {
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
