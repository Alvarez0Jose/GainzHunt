require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/Users');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Define users
const users = [
  {
    username: "Jose Alvarez",
    email: "josealejandro220@gmail.com",
    password: "Ocean1106!"
  },
  {
    username: "Shaddai Fernandez",
    email: "ShaddaiFernandez7@.com",
    password: "Shaddai1997"
  },
  {
    username: "Nashalys Fernandez",
    email: "Nashalys@gmail.com",
    password: "Nashalys!"
  },
  {
    username: "Braian Perez",
    email: "BraianPerez@holbertonschool.com",
    password: "Braian1106!"
  }
];

// Insert users into the database
users.forEach(user => {
    User.updateOne(
      { email: user.email },
      { $set: user },
      { upsert: true }
    )
    .then(() => console.log(`User ${user.email} inserted or updated`))
    .catch(error => console.log('Error inserting or updating user: ', error));
  });
