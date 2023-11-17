import React, { useEffect } from 'react';

function GymSearch() {
  useEffect(() => {
    const city = 'guaynabo';
    fetch(`http://127.0.0.1:5000/api/gyms?city=${city}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    // Your JSX for rendering the component
    <div>
      {/* ... */}
    </div>
  );
}

export default GymSearch;
