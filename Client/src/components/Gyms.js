import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GymList({ selectedCity }) {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/gyms')
      .then(response => {
        setGyms(response.data);
      })
      .catch(error => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);

  const filteredGyms = gyms.filter(gym => gym.city === selectedCity);

  return (
    <div>
      {filteredGyms.map(gym => (
        <div key={gym.id}>
          <h2>{gym.name}</h2>
          <p>City: {gym.city}</p>
          <p>Website: <a href={gym.url}>{gym.url}</a></p>
        </div>
      ))}
    </div>
  );
}

export default GymList;``
