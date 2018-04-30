const express = require('express')
const router = express.Router()

const userModel = require("../models/user")

//GET Users 
router.get('/', (req, res) => {
    console.log("USERS GET REQUEST IN EXPRESS")
    userModel.find({})
        .then((users) => {
            console.log("USERS", users)
            res.json(users)
        })
        .catch((err) => {
            console.log(err)
        })
})

//POST New User
router.post('/', (req, res) => {
    console.log('CREATING USER', req.body.user)
    const newUser = new userModel(req.body.user)
    newUser.save()
        .then((user) => {
            console.log(user)
            res.json(user)
        }).catch(console.log)
})


module.exports = router