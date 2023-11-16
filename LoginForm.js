import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post('/login', {
      username: username,
      password: password
    });

    if (response.data.success) {
      // Login was successful
      console.log('Login successful');
      // You might want to redirect the user to another page here, or update your application's state to reflect that the user is now logged in.
    } else {
      // Login failed
      console.log('Login failed');
      setErrorMessage('Login failed. Please check your username and password.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default LoginForm;
