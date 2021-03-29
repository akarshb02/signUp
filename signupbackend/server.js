const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeUrl = require('./signupbackend/route/routes')
const cors = require('cors')


dotenv.config()

const url = 'mongodb+srv://<username>:<password>@cluster0.h9fjl.mongodb.net/mytable?retryWrites=true&w=majority';


mongoose.connect(url, () => console.log('connected'))


app.use('/app', routeUrl)
app.use(cors())

app.listen(30, () => {
    console.log('server started');
})
