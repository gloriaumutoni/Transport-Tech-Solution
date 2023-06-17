import '../cancel-ticket/CancelTicket.css'
import React from 'react';
import { BsFillBusFrontFill } from "react-icons/bs";

 


class CancelTicketPage extends React.Component {
  handleCancelTicket = () => {
    // Perform cancel ticket logic here
  };

  render() {
    return (
      <div className="cancel-container">
        <h1 id="title">Bus Ticket Booking Online</h1>
        <p id="sub-title">Bus link makes it easy for booking <BsFillBusFrontFill id="bus"/></p>
        <div className="sub-container">
        <div className="option1">
            <input type="text"  placeholder="From" className="from1"/>
               
          </div>
          <div className="option2">
            <input type="text" placeholder="To" className="from2" />  
          </div>
          <div className="option3">
            <select className="from">
              <option value="08:00">8:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="18:00">6:00 PM</option>
            </select>
          </div>
          <div className="btn">
          <button className="cancel-ticket" onClick={this.handleCancelTicket}>
          Cancel Ticket
        </button>
          </div>
        </div>
       
      </div>
    );
  }
}

export default CancelTicketPage;
