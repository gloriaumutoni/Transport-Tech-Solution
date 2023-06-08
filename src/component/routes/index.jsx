import React from "react";
import {Routes, Route} from 'react-router-dom'
import Admindash from '../../pages/Admindashboard/admindash'
import Trial from '../trial.jsx'
import Tracking from "../../pages/Tracking/tracking";
const Index = () =>{
    return(
        <Routes>
            <Route path="/trial" element ={<Trial/>}/>
            <Route path="/admin" element={<Admindash/>}/>
            <Route path="/tracking" element={<Tracking/>}/>
        </Routes>
    )
}
export default Index;