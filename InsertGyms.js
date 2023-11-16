require('dotenv').config();
const mongoose = require('mongoose');
const Gym = require('./models/Gym');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Define gyms
const gyms = [
  {
    name: "Powerhouse Gym",
    address: "Ave Jesus T Pinero Y Esq Carr 19, 00965 Guaynabo, Puerto Rico",
    phone_number: "(787) 792-0388",
    url: "https://powerhousegym.com/locations/san-juan-puerto-rico/",
    reviews: 0
  },
  {
    name: "Acropolis Fitness",
    address: "8 Calle Méndez Vigo O, 00680 Mayaguez, Puerto Rico",
    phone_number: "(787) 832-3331",
    url: "https://www.facebook.com/AcropolisFitness/",
    reviews: 0
  },
  {
    name: "Planet Fitness Ciudadela",
    address: "1511 Ponce De Leon, Ste 1, San Juan, PR 00909",
    phone_number: "787-919-0220",
    url: "https://www.planetfitness.com/gyms/san-juan-ciudadela-pr",
    reviews: 0
  }
];

// Insert gyms into the database
Gym.insertMany(gyms)
  .then(() => console.log('Gyms inserted'))
  .catch(err => console.error('Error inserting gyms: ', err));
