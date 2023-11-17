require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const path = require('path');

const gymRoutes = require('./routes/Gyms');
const authRoutes = require('./routes/Authorization');
const User = require('./models/Users');
const Gym = require('./models/Gym');

const app = express();
const port = process.env.PORT || 5000;

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.resolve(__dirname, '../Client')));

// API Routes
app.use('/api/gyms', gymRoutes);
app.use('/api/auth', authRoutes);

// New route for fetching gym data
app.get('/api/gyms', async (req, res) => {
  const city = req.query.city;
  console.log('Received request for city:', city);

  try {
    const gyms = await Gym.find({ city });
    console.log('Sending gyms:', gyms);
  res.send(gyms);
  } catch (error) {
    console.error('Error fetching gyms:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Login route
app.post('/login', async (req, res) => {
  // ... (your login logic here)
});

// Check-auth route
app.get('/check-auth', (req, res) => {
  // ... (your authentication logic here)
});

// Route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client', 'Index.html'));
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
