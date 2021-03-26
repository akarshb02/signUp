const express = require('express');
const app = express()
const mongoose = require('mongoose');

const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.data, () => console.log('connected'))





app.listen(1000, () => {
    console.log('server started');
})
