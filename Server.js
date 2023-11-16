require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const gymRoutes = require('./routes/Gyms');
const authRoutes = require('./routes/Authorization');
const User = require('./models/Users');
const Gym = require('./models/Gym');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static('.'));
app.use('/api/gyms', gymRoutes);
app.use('/auth', authRoutes);

// New route for fetching gym data
app.get('/api/gyms', async (req, res) => {
  const gyms = await Gym.find();
  res.send(gyms);
});

app.get('/login', function(req, res) {
  res.sendFile(__dirname + '/Index.html');
});

app.post('/login', async (req, res) => {
  // Extract username and password from request body
  const { username, password } = req.body;

  // Find user in database
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).send({ error: 'Invalid username or password' });
  }

  // Check password
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).send({ error: 'Invalid username or password' });
  }

  // User is authenticated
  res.send({ message: 'Login successful' });
});

app.all('/login', (req, res, next) => {
  res.status(405).send({ error: 'Method Not Allowed' });
});

// Add this middleware function
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).send({ error: 'User not authenticated' });
  }
}

// Add this route
app.get('/check-auth', ensureAuthenticated, (req, res) => {
  res.send({ message: 'User is authenticated' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
