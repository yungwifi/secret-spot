const express = require('express')
const router = express.Router({ mergeParams: true })
const photoModel = require("../models/photo")
const userModel = require("../models/user")

//POST New Spot
router.post('/', (req, res) => {
    userModel.findById(req.params.userId)
        .then((user) => {
            user.photos.push(new photoModel())
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

module.exports = router