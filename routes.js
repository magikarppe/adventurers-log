const express = require('express')
const router = express.Router()
const signupModelsCopy = require('../models/signupModels')


router.post('/routes', (request, response) =>{
    //post request will be made when user clicks "Sign Up"
    const signedupUser = new signupModelsCopy({
        fullname: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
    })

    signedupUser.save()

    .then(data =>{
        response.json(data)
    })

    .catch(error =>{
        response.json(error)
    })
})


module.exports = router