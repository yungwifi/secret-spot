const Schema = require('../db/schema')
const mongoose = require('mongoose')

const photoModel = mongoose.model('Photo', Schema.PhotoSchema)
module.exports = photoModel