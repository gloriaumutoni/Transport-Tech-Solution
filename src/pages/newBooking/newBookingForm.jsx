import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../newBooking/newBookingForm.css';
import { BsArrowDownUp } from "react-icons/bs";

import NavigationBar from '../navigation/NavigationBar';
import Seat from '../newBooking/Seat'

const NewBookingForm = () => {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [error, setError] = useState('');

  const handleClick = () => {
    const temp = from;
    setFrom(destination);
    setDestination(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (from === '' || destination === '') {
      setError('Please fill in all the fields.' );
      return;
    }

    // Clear the error state
    setError('');

    // Display toast notification
    toast.success('Your ticket was booked');
  };

  return (
    <div className='all'>
      <NavigationBar />
      <div className="Bcontainer">
        <form className="form" onSubmit={handleSubmit}>
          <header id="head">Book your ticket</header>

          {error && <p className="error">{error}</p>}
           <header id="title">enter your username</header>
            <input type='text' placeholder="enter your username" id='first'/>
           
          <label id="beyond">
            <h1 id="title">From:</h1>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              id="input-form1"
            >
              <option id="design" value="">Select</option>
              <option id="design" value="Kanombe">Kanombe</option>
              <option id="design" value="Kimirinko">Kimirinko</option>
              <option id="design" value="Kicukiro">Kicukiro</option>
              <option id="design" value="Downtown">Downtown</option>
              <option id="design" value="Nyamirambo">Nyamirambo</option>
            </select>
          </label>

          <div className='vice-versa'>
            <BsArrowDownUp id='arrow' onClick={handleClick} />
          </div>

          <label id="beyond">
            <h1 id="title">Destination:</h1>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              id="input-form1"
            >
              <option id="design" value="">Select</option>
              <option id="design" value="Ruyenzi">Ruyenzi</option>
              <option id="design" value="Kacyiru">Kacyiru</option>
              <option id="design" value="Remera">Remera</option>
              <option id="design" value="Kabuga">Kabuga</option>
              <option id="design" value="Gikondo">Gikondo</option>
            </select>
          </label>

          <label id="beyond">
            <h1 id="title">Time:</h1>
            <select id="input-form1">
              <option id="design" value="">Select</option>
              <option id="design" value="Ruyenzi">8:00am</option>
              <option id="design" value="Kacyiru">9:00am</option>
              <option id="design" value="Remera">10:00am</option>
              <option id="design" value="Kabuga">11:00am</option>
              <option id="design" value="Gikondo">12:00am</option>
            </select>
          </label>

          <label id="beyond">
            <h1 id="title">choose seat number</h1>
            <select id="input-form1">
              <option id="design" value="">Select</option>
              <option id="design" value="1">1</option>
              <option id="design" value="2">2</option>
              <option id="design" value="3">3</option>
              <option id="design" value="4">4</option>
              <option id="design" value="5">5</option>
            </select>
          </label>

          <button type="submit" id="btn">Book Ticket</button>
        </form>
        <Seat />
      </div>

      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
};

export default NewBookingForm;
