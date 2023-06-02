import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../../pages/home/home.jsx';
import Admindash from '../../pages/Admindashboard/admindash'
import Trial from '../trial.jsx'
import Booking from "../../pages/Booking/booking";
import Destination from "../../pages/Destination/destination";


const Index = () =>{
    return(
        <Routes>
            <Route path="/trial" element ={<Trial/>}/>
            <Route path="/admin" element={<Admindash/>}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/destination" element={<Destination/>}/>
            <Route path='/' element={<Home/>}/>
           
        </Routes>
    )
}
export default Index;