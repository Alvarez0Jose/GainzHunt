import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // New state for email

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post('/register', { // Change endpoint to '/register'
      username: username,
      password: password,
      email: email // Include email in the request body
    });

    if (response.data.success) {
      // Registration was successful
      console.log('Registration successful');
      // You might want to redirect the user to another page here, or update your application's state to reflect that the user is now registered.
    } else {
      // Registration failed
      console.log('Registration failed');
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
      <label>
        Email: {/* New field for email */}
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <input type="submit" value="Register" />
    </form>
  );
}

export default RegisterForm;
