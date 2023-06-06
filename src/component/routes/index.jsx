import React from "react";
import {Routes, Route} from 'React-router-dom'

import Login from '../Login.jsx'
const Login = () =>{
    return(
        <Routes>
            {/* <Route path="/trial" element ={<Trial/>}/> */}
            <Route path="/login" element={<login />}/>
        </Routes>
    )
}
export default Login;