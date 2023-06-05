import "../Booking/BookingForm.css"
import  { useState } from "react";


const BookingForm = () => {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call here
    console.log("Booking submitted:", { from, destination, time });
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="form">
      <header>Book your ticket</header>
      <label>
       <h1>From:</h1> 
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value) }
          id= 'input-form'/>
      </label>

      <label>
      <h1>Destination</h1>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          id= 'input-form' />
      </label>

      <label>
      <h1>Time:</h1>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id= 'input-form'  />
      </label>

      <button type="submit">Book Ticket</button>
    </form>
    </div>
  );
};

export default BookingForm;
