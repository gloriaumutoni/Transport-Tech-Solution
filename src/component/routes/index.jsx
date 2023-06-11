import React from "react";
import {Routes, Route} from 'React-router-dom'
import Signup from "../../pages/signup";
// import Login from '../Login.jsx'
// import {Login as Signin} from "../../pages/signup" 


const Login = () =>{
    return(
        <Routes>
            {/* <Route path="/trial" element ={<Trial/>}/> */}
            
            <Route path="/Signup" element={<Signup />}/>
            {/* <Route path="/login" element={<Signin />}/> */}
        </Routes>
    )
}
export default Login;