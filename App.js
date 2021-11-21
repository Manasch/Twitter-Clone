const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 5000;
const { URL } = require('./.keys');

require('./models/user');

app.use(express.json());
app.use(require('./routes/auth'));
app.use('/', express.static(path.join(__dirname + '/static')));

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('connected to server');
})

mongoose.connection.on('error', () => {
    console.log('server error');
})

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(PORT, () => {
    console.log('server is running on port', PORT);
})