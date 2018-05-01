const express = require('express')
const router = express.Router({ mergeParams: true })
const spotModel = require("../models/spot")
const userModel = require("../models/user")

//POST New Spot
router.post('/:id', (req, res) => {
    console.log("SPOT UPDATE RESPONSE")
    userModel.findById(req.params.userId)
        .then((user) => {
            const spot = user.spots.id(req.params.id)
            console.log(spot)
            spot.name = req.body.name,
                spot.location = req.body.location,
                spot.obstacle = req.body.obstacle
            return user.save()
                .then((user) => {
                    console.log("SAVING USER")
                    res.json(user)
                })
        }).catch(console.error)
})


router.patch('/:id', (req, res) => {
    console.log("SPOT UPDATE RESPONSE")
    userModel.findById(req.params.userId)
        .then((user) => {
            const spot = user.spots.id(req.params.id)
            console.log("SPOT", spot)
            console.log("REQ", req.body)
            user.spots = req.body
            return user.save()
                .then((user) => {
                    console.log("SAVING USER")
                    res.json(user)
                })
        }).catch(console.error)
})

module.exports = router