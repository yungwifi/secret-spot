const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpotSchema = new Schema({
    name: String,
    location: String,
    obstacle: String,
})

const PhotoSchema = new Schema({
    image: String,
    caption: String,
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
    name: String,
    profilePhoto: String,
    stance: String,
    location: String,
    bio: String,
    spots: [SpotSchema],
    photos: [PhotoSchema]
})

module.exports = {
    UserSchema,
    SpotSchema,
    PhotoSchema
}