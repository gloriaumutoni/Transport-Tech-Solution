import React from "react";
import './booking.css';
import Image from '../image/ElecMobility.jpg'

const Booking =()=>{
    return(
        <div className="container">
        <div className="title">
      Booking
        </div>
        <div className="table">
        <div className="table-tile">
           
        <div className="origin">
        Origin
     <ul>
<li>kicukiro nyanza</li>
<li>kicukiro nyanza</li>
<li>kicukiro nyanza</li>
<li>kicukiro nyanza</li>
<li>Gatenga</li>
<li>Gatenga</li>
<li>Rwandex</li>
<li>Rwandex</li>
<li>kicukiro nyanza</li>




     </ul>
        </div>
        </div>





        <div className="table-tile">
           
           <div className="destination">
          Destination
        <ul>
   <li>Nyabugogo</li>
   <li>Nyabugogo</li>
   <li>Nyabugogo</li>
   <li>Rwandex</li>
   <li>Sonatube</li>
   <li>Rwandex</li>
   <li>Nyabugogo</li>
   <li>Nyabugogo</li>
   <li>Nyabugogo</li>
   
   
   
   
        </ul>
           </div>
           </div>





           <div className="table-tile">
           
           <div className="destination">
           Status
    <div className="holder">
    <div className="box1">
        Deny
        </div>
        <div className="box2">
        Accept
    </div>
    </div>
           </div>
           </div>
        </div>

        </div>
    )
}
export default Booking;