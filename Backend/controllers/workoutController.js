const workoutSchema = require('../models/workoutSchema');
const workoutModel = require('../models/workoutSchema');
const mongoose = require('mongoose');

//get all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await workoutModel.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}


//get one workout
const getOneWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No workout with id: ${id}`)
    }

    const workout = await workoutSchema.findById(id)

    if(!workout){
        res.status(404).json({error: "Workout not found"})
    }

    res.status(200).json(workout)
}


//create one workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    //add doc to db
    try {
        const workout = await workoutSchema.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


//delete one workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No workout with id: ${id}`)
    }

    const workout = await workoutSchema.findByIdAndDelete(id)

    if(!workout){
        res.status(404).json({error: "Workout not found"})
    }

    res.status(200).json({message: "Workout deleted"})
}


//update one workout
const updateWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No workout with id: ${id}`)
    }

    const workout = await workoutSchema.findByIdAndUpdate({_id: id}, {...req.body})

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    getOneWorkout,
    deleteWorkout,
    updateWorkout
}