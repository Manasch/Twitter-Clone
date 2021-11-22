const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const path = require('path');
// const jwt = require('jsonwebtoken');
const router = express.Router();
const User = mongoose.model("User");
// const login = require('../middleware/login');
// const { JWT_SECRET } = require('../.keys');

router.get("/signup", (req, res) => {
    res.sendFile("signup.html", { root: path.join(__dirname, '..', 'static') });
});

router.get("/login", (req, res) => {
    res.sendFile("login.html", { root: path.join(__dirname, '..', 'static') });
});

router.get("/home", (req, res) => {
    User.findOne({ current: true }).then((loggedInUser) => {
        if(!loggedInUser)
        {
            return res.status(401).json({ error: "YOU MUST LOG IN" })
        }
        req.user = loggedInUser;
        // console.log(loggedInUser.username);
        res.sendFile("home.html", { root: path.join(__dirname, '..', 'static') });
        User.findOneAndUpdate({ current: true }, { current: false }, null, function(err, user) {
            if (err) {
                console.log(err)
            } else {
                // console.log("Original user : ", user);
            }
        })
    })
});

router.post("/signup", async(req, res) => {
    var {
        username,
        email,
        password,
        name,
        dob
    } = req.body;
    var current = 'false';
    // console.log(req.body);
    if (!username || !email || !password || !name) {
        return res.status(422).json({
            error: "please fill all fields",
        });
    }
    bcrypt.hash(password, 13)
        .then((hashedpass) => {
            User.findOne({
                email: email
            })
            User.findOne({
                    username: username
                })
                .then((savedUser) => {
                    if (savedUser) {
                        return res.status(422).json({
                            error: "user with this username/email already in database"
                        })
                    }
                    const user = new User({
                        username,
                        email,
                        password: hashedpass,
                        name,
                        dob,
                        current
                    })
                    user.save()
                        .then((user) => {
                            res.json({
                                message: "saved successfully"
                            })
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
                .catch((err) => {
                    console.log(err)
                })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/login', (req, res) => {
    var { username, password } = req.body
    var current = 'true'
    if (!username || !password) {
        return res.status(422).json({ error: "please fill all fields" })
    }
    User.findOne({ username: username })
        .then((savedUser) => {
            if (!savedUser) {
                return res.status(422).json({ error: "invalid email or password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(match => {
                    if (match) {
                        // const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                        // res.json({ token: token });
                        User.findOneAndUpdate({ _id: savedUser._id }, { current: 'true' }, null, function(err, user) {
                            if (err) {
                                console.log(err)
                            } else {
                                // console.log("Original Doc : ", user);
                            }
                        })
                        console.log("successful login");
                    }
                    else {
                        return res.status(422).json({ error: "invalid email or password" })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        })
})

module.exports = router;