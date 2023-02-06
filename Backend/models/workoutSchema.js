const mongoose = require('mongoose')

//create a schema
const Schema = mongoose.Schema

//constructor
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
},  {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)