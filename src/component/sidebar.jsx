import React from "react";
import './sidebar.css'
// import {BiSolidDashboard} from 'react-icons/bi'
const Side =()=>{
    return(
        <>
        <div className="admnin-sidebar">
            <div className="logo">
                <h1 style={{color:"white"}}>Bus<span style={{color:"#009AC7"}}> link</span></h1>
            </div>
            <div className="list-items">
                <ul>
                <li><a href="#"><i class='bx bxs-dashboard'></i> Dashboard</a></li>
                <li><a href="#"><i class='bx bxs-id-card'></i> Drivers</a></li>
                <li><a href="#"><i class='bx bx-bus'></i> Bus manage</a></li>
                <li><a href="#"><i class='bx bxs-book-content'></i> Form</a></li>
                </ul>
            </div>
            <div className="line"></div>
            <div className="list-items">
                <ul>
                <li><a href="#">Claims & <br/> feedback</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Help center</a></li>
                </ul>
                </div>
                <label class="switch">
               <input type="checkbox" id="themeToggle"/>
               <span class="slider round"></span>
                </label>
        </div>
        </>
    )
}

export default Side