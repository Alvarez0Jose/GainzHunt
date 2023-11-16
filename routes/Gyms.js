const express = require('express');
const router = express.Router();
const cache = require('memory-cache');

// Import Gym model
const Gym = require('../models/Gym');

// Define a route to fetch gym data with caching
router.get('/', (req, res) => {
  const key = '__express__/api/gyms';
  const cachedBody = cache.get(key);

  if (cachedBody) {
    res.status(200).send(cachedBody);
    return;
  }

  Gym.find()
    .then(gyms => {
      cache.put(key, gyms, 60 * 60 * 1000); // Cache for 1 hour
      res.status(200).send(gyms);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error fetching gyms');
    });
});

module.exports = router;
