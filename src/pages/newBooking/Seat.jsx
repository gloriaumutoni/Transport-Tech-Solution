import React, { useState } from 'react';

import './Seat.css'; // CSS file for styling

const BusSeatMap = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelection = (seat) => {
    setSelectedSeat(seat);
  };

  const generateSeatMap = () => {
    const seatMap = [];
    let seatNumber = 1;

    for (let row = 0; row < 7; row++) {
      const rowSeats = [];

      const seatsPerRow = row >= 3 ? 4 : 3; // Adjust seats per row starting from the 4th row

      for (let col = 0; col < seatsPerRow; col++) {
        const seat = (
          <div
            key={`${row}-${col}`}
            className={`seat ${selectedSeat === seatNumber ? 'selected' : ''}`}
            onClick={() => handleSeatSelection(seatNumber)}
          >
            {seatNumber}
          </div>
        );

        rowSeats.push(seat);
        seatNumber++;
      }

      seatMap.push(<div key={row} className="row">{rowSeats}</div>);
    }

    return seatMap;
  };

  return (
    <div className="bus-seat-map">
      
      <div className="seat-map-container">
      <h2 id="map">Bus Seat Map</h2>
        {generateSeatMap()}</div>
    </div>
  );
};

export default BusSeatMap;
