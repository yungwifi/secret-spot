const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpotSchema = new Schema({
    name: {
        type: String,
        default: "Example Spot"
    },
    location: {
        type: String,
        default: "Example Location"
    },
    obstacle: {
        type: String,
        default: "Example Obstacle"
    },
})

const PhotoSchema = new Schema({
    image: String,
    caption: String
})

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: "Your Name"
    },
    profilePhoto: {
        type: String,
        default: "Image URL Goes Here"
    },
    stance: {
        type: String,
        default: "Your Stance"
    },
    location: {
        type: String,
        default: "Your Location"
    },
    bio: {
        type: String,
        default: "What do you have to say for yourself?"
    },
    spots: [SpotSchema],
    photos: [PhotoSchema]
})

module.exports = {
    UserSchema,
    SpotSchema,
    PhotoSchema
}