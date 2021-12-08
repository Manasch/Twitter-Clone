const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    tweets: [{
        type: String,
        required: false
    }]
});

const Tweet = mongoose.model("Tweet", TweetSchema);
module.exports = Tweet;
