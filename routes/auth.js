const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const path = require('path');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = mongoose.model("User");
const login = require('../middleware/login');
const { JWT_SECRET } = require('../.keys');

router.get("/signup", (req, res) => {
    res.sendFile("signup.html", { root: path.join(__dirname, '..', 'static') });
});

router.get("/login", (req, res) => {
    res.sendFile("login.html", { root: path.join(__dirname, '..', 'static') });
});

router.post("/signup", async(req, res) => {
    var {
        username,
        email,
        password,
        name,
        dob
    } = req.body;
    console.log(req.body);
    if (!username || !email || !password || !name) {
        return res.status(422).json({
            error: "please fill all fields",
        });
    }
    const testuser = new User({
        username,
        email,
        password,
        name,
        dob
    })
    bcrypt.hash(password, 13)
        .then((hashedpass) => {
            User.findOne({
                    email: email
                })
                .then((savedUser) => {
                    if (savedUser) {
                        return res.status(422).json({
                            error: "user with this email already in database"
                        })
                    }
                    const user = new User({
                        username,
                        email,
                        password: hashedpass,
                        name,
                        dob
                    })
                    user.save()
                        .then((user) => {
                            res.json({
                                message: "saved successfully"
                            })
                            console.log(user.username);
                            console.log(user.email);
                            console.log(testuser.password);
                            console.log(user.name);
                            console.log(user.email);
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
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                        res.json({ token: token });
                        console.log("successful login");
                    } else {
                        return res.status(422).json({ error: "invalid email or password" })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        })
})

router.get("/home", login, (req, res) => {
    // res.sendFile("home.html", { root: path.join(__dirname, '..', 'static') });
    res.send("hello");
});
module.exports = router;