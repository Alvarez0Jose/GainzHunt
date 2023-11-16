import React from 'react';
import axios from 'axios';

class GymList extends React.Component {
  state = {
    gyms: [],
    isLoading: true,
    error: null
  }

  componentDidMount() {
    axios.get('/api/gyms')
      .then(res => {
        this.setState({ gyms: res.data, isLoading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ error: err, isLoading: false });
      });
  }

  render() {
    const { gyms, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        {gyms.map(gym => (
          <div key={gym._id}>
            <h2>{gym.name}</h2>
            <p>{gym.location}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GymList;