const express = require('express')
const router = express.Router({ mergeParams: true })
const photoModel = require("../models/photo")
const userModel = require("../models/user")

//POST New Photo
router.post('/', (req, res) => {
    console.log("ADD PHOTOS ROUTE HIT IN EXPRESS")
    userModel.findById(req.params.userId)
        .then((user) => {
            user.photos.push(new photoModel(req.body))
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

//DELETE Photo
router.delete('/:id', (req, res) => {
    userModel.findById(req.params.userId)
        .then((user) => {
            user.update({
                $pull:
                    { photos: { _id: req.params.id } }
            })
                .then((data) => {
                    console.log("DELETE PHOTO ROUTE IN EXPRESS")
                    res.json(data)
                })
                .catch(console.error)
        })
        .catch(console.error)
})

module.exports = router