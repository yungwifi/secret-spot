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

//GET Specific User
router.get('/:id', (req, res) => {
    console.log("Server getting User from DB")
    userModel.findById(req.params.id)
        .then((user) => {
            res.json(user)
        })
        .catch(console.log)
})


//DELETE a User
router.delete('/:id', (req, res) => {
    userModel.findByIdAndRemove(req.params.id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log(err)
        })
})

//Update a User 
router.patch('/:id', (req, res) => {
    // console.log("UPDATE ROUTE HITTING SERVER", req.body)
    userModel.findByIdAndUpdate(req.params.id, req.body)
        .then((user) => {
            res.json(req.body)
            console.log("DB RESPONSE", user)
        })
        .catch((err) => {
            console.log(err)
        })
})


module.exports = router