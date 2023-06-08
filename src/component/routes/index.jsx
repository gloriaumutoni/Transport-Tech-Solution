import React from "react";
import {Routes, Route} from 'React-router-dom'
import Signup from "../../pages/signup";
// import Login from '../Login.jsx'


const Login = () =>{
    return(
        <Routes>
            {/* <Route path="/trial" element ={<Trial/>}/> */}
            <Route path="/login" element={<login />}/>
            <Route path="/Signup" element={<Signup />}/>
        </Routes>
    )
}
export default Login;