const express = require('express')
const router = express.Router()

const userModel = require("../models/user")

//GET Users 
router.get('/', (req, res) => {
    userModel.find({})
        .then((users) => {
            console.log("USERS", users)
            res.json(users)
        })
        .catch((err) => {
            console.log(err)
        })
})


module.exports = router