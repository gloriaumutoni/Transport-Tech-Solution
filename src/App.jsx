import { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Routes from "./component/routes";
// import './App.css'

 
import Contact from "../src/pages/contact-us/contactUs"
 
// import Admin from "./pages/Admindashboard/admindash";
 


function App() {
  return (
 
    <>
       <Contact />
       
     
 
    
     {/* <Home/>  */}
     <Router>
<Routes></Routes>
</Router>
   </>
 
  )
}

export default App;
