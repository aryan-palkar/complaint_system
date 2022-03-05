const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupModel')


router.post('/signup', (req, res) => {
    const signedUpUser = new signUpTemplateCopy({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
    })

    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports = router;