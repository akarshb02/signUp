const express = require('express')
const router = express.Router()
const signUpTemp = require('../models/signUpModule')

router.post('/signup', (request, res) => {
    const signUpUser = new signUpTemp({
        fullName: request.body.fullName,
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password

    })
    signUpUser.save()
        .then(data => {
            res.json(data)
        }).catch(error => {
            res.json(error)
        })
})

module.exports = router
