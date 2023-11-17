const mongoose = require('mongoose');

// Define a schema for the gym data
const gymSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    phone_number: String,
    url: String,
    reviews: { type: Number, default: 0 }
});

// Create a model from the schema
const Gym = mongoose.model('Gym', gymSchema);

module.exports = Gym;

