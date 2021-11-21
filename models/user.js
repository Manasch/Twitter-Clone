const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    dob: {
        type: Date,
        required: false
    }
});

mongoose.model("User", UserSchema);