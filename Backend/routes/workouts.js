const express = require('express')
const router = express.Router()
const workoutSchema = require('../models/workoutSchema')
const {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// GET all workouts
router.get('/', getAllWorkouts)

// GET one workout
router.get('/:id', getOneWorkout)

// POST one workout
router.post('/', createWorkout)

//Delete one workout
router.delete('/:id', deleteWorkout)

//Update one workout
router.patch('/:id', updateWorkout)


module.exports = router
