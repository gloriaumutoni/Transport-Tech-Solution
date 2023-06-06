import React, { useState } from 'react';
import '../Booking/BookingForm.css';

const BookingForm = () => {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call here
    console.log('Booking submitted:', { from, destination, time });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <header>Book your ticket</header>
        <label>
          <h1>From:</h1>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            id="input-form1">

            <option id="design" value="">Select</option>
            <option id="design" value="Kanombe">Kanombe</option>
            <option id="design" value="Kimirinko">Kimirinko</option>
            <option id="design" value="Kicukiro">Kicukiro</option>
            <option id="design" value="Downtown">Downtown</option>
            <option id="design" value="Nyamirambo">Nyamirambo</option>
          </select>
        </label>

        <label>
          <h1>Destination</h1>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            id="input-form1">

            <option id="design" value="">Select</option>
            <option id="design" value="Ruyenzi">Ruyenzi</option>
            <option id="design" value="Kacyiru">Kacyiru</option>
            <option id="design" value="Remera">Remera</option>
            <option id="design" value="Kabuga">Kabuga</option>
            <option id="design" value="Gikondo">Gikondo</option>
          </select>
        </label>

        <label>
          <h1>Time:</h1>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            id="input-form"/>
        </label>

        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default BookingForm;
