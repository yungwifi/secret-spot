const express = require('express')
const router = express.Router({ mergeParams: true })
const spotModel = require("../models/spot")

//POST New Spot
router.post('/', (req, res) => {
    console.log('CREATING SPOT', req.body.user)
    const newSpot = new spotModel(req.body.user)
    newSpot.save()
        .then((spot) => {
            console.log(spot)
            res.json(spot)
        }).catch(console.log)
})

module.exports = router