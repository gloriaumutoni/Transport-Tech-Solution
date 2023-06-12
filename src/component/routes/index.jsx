import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../../pages/home/home.jsx';
import Admindash from '../../pages/Admindashboard/admindash'
import Trial from '../trial.jsx'
import Booking from "../../pages/Booking/booking";
import Destination from "../../pages/Destination/destination";
import Signup from "../../pages/signup";
import Login from "../../pages/login";


const Index = () =>{
    return(
        <Routes>
            <Route path="/trial" element ={<Trial/>}/>
            <Route path="/admin" element={<Admindash/>}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/destination" element={<Destination/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path="/Signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
           
        </Routes>
    )
}
export default Index;