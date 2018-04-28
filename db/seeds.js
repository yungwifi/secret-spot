const User = require('../models/user')
const Spot = require('../models/spot')
const Photo = require('../models/photo')

require('dotenv').config()
// connect to database
const mongoose = require('mongoose')
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect('mongodb://localhost/beer-reviews')
}

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connection error!!! ${error}`)
    process.exit(-1)
})

const krogerLedge = new Spot({
    name: "Kroger Hubba Ledge",
    location: "Kroger Denton Tx",
    obstacle: "Hubba Ledge"
})
const hollywoodHigh = new Spot({
    name: "Hollywood High School",
    location: "Hollywood High",
    obstacle: "16 set staircase"
})

const deckPhoto = new Photo({
    image: "https://i.imgur.com/IAmKuTl.png",
    caption: "Im on that new set up grind, literally."
})

const parkPhoto = new Photo({
    image: "https://i.imgur.com/grr7dGU.png",
    caption: "About to shred sauce like ragu."
})

const selfiePhoto = new Photo({
    image: "https://i.imgur.com/U4TBvbD.png",
    caption: "Swaggin on the city"
})

const spencerM = new User({
    userName: 'yungwifi',
    password: 'switchflip',
    name: 'Spencer Merryman',
    profilePhoto: 'https://i.imgur.com/qIjJwKe.png',
    stance: 'Goofy',
    location: 'Atlanta, GA',
    spots: [hollywoodHigh, tesla],
    photos: [deckPhoto, parkPhoto, selfiePhoto]
})

User.remove({})
    .then(() => spencerM.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())


