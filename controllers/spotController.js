const express = require('express')
const router = express.Router({ mergeParams: true })
const spotModel = require("../models/spot")
const userModel = require("../models/user")

//POST New Spot
router.post('/', (req, res) => {
    userModel.findById(req.params.userId)
        .then((user) => {
            user.spots.unshift(new spotModel())
            user.save()
                .then((data) => {
                    console.log("DATA TO BE SENT", data)
                    res.json(data)
                })
        })
        .catch((err) => {
            console.error(err)
        })
})


router.delete('/:id', (req, res) => {
    userModel.findById(req.params.userId)
        .then((user) => {
            user.update({
                $pull:
                    { spots: { _id: req.params.id } }
            })
                .then((data) => {
                    console.log("DELETE SPOT ROUTE IN EXPRESS")
                    res.json(data)
                })
                .catch(console.error)
        })
        .catch(console.error)
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