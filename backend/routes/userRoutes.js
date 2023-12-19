const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// endpoint for registering a new user
router.route('/register').post((req, res) => {
    // const username = req.body.username || "";
    const password = req.body.password;
    const email = req.body.email;

    // encrypt password using salt and hash
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        const newUser = new User({
            email: email,
            password: hash
        });

        newUser.save().then(() => res.json('User added!')).catch(err => res.status(400).json('Error: ' + err));

    });

});

// endpoint for logging in a user
router.route('/login').post((req, res) => {
    // const username = req.body.username || "";
    const password = req.body.password;
    const email = req.body.email;

    const token = jwt.sign({ userId: email }, process.env.SECRET, { expiresIn: '1h' });
    res.json({ token });

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        if (result) {
                            res.json('Login successful');
                        } else {
                            res.json('Incorrect password');
                        }
                    }
                });
            } else {
                res.json('User does not exist');
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;