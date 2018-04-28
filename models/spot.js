const Schema = require('../db/schema')
const mongoose = require('mongoose')

const spotModel = mongoose.model('Spot', Schema.SpotSchema)
module.exports = spotModel