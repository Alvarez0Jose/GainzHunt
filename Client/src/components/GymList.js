import React, { useState } from 'react';

const GymList = () => {
  const [gyms, setGyms] = useState([]);

  const handleSearch = () => {
    // Hardcoded gym information for Guaynabo
    const hardcodedGyms = [
      {
        name: 'Powerhouse Gym',
        address: 'Ave Jesus T Pinero Y Esq Carr 19, 00965 Guaynabo, Puerto Rico',
        city: 'Guaynabo',
        phone_number: '(787) 792-0388',
        url: 'https://powerhousegym.com/locations/san-juan-puerto-rico/',
        reviews: 0,
        _id: '1', // You can use a unique identifier for each gym
      },
      // Add more hardcoded gyms if needed
    ];

    setGyms(hardcodedGyms);
  };

  return (
    <div>
      {/* Your UI elements for selecting the city */}
      <input type="text" placeholder="Enter city" />
      <button onClick={handleSearch}>Search</button>

      {/* Display gym information */}
      {gyms.map((gym) => (
        <div key={gym._id}>
          <h2>{gym.name}</h2>
          <p>{gym.address}</p>
          <p>{gym.phone_number}</p>
          {/* Display other gym information as needed */}
        </div>
      ))}
    </div>
  );
};

export default GymList;
