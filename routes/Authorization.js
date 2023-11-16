const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

let users = {}; // This should be replaced with a real database

router.post('/register', async (req, res) => {
    const username = req.body.username;
    const plainTextPassword = req.body.password;

    const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
    users[username] = hashedPassword;

    res.status(201).send();
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const plainTextPassword = req.body.password;

    if (!username || !plainTextPassword) {
        return res.status(400).send('Username and password must not be empty');
    }

    if (!users.hasOwnProperty(username)) {
        return res.status(400).send('User does not exist');
    }

    const hashedPassword = users[username];
    const match = await bcrypt.compare(plainTextPassword, hashedPassword);

    if (match) {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Invalid password');
    }
});

module.exports = router;
