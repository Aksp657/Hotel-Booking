import React, { useState } from 'react';
import "./Right.css" 

const HotelList = () => {
  const [activeHotel, setActiveHotel] = useState(null);

  const hotels = [
    {
      name: 'Hotel',
      status: ['Active_Hotels', 'Banned_Hotels', 'All_Hotels', 'Send_Notifictaion'],
    },
    
  ];

  const toggleHotelStatus = (hotelName) => {
    setActiveHotel(activeHotel === hotelName ? null : hotelName);
  };

  return (
    <div>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <button className='btn' onClick={() => toggleHotelStatus(hotel.name)}>
              {hotel.name}
            </button>
            {activeHotel === hotel.name && (
              <ul>
                {hotel.status.map((status, index) => (
                  <li key={index}>{status}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
