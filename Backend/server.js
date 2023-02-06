require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()

//middlewares
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts/', workoutRoutes)

//connect to db
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Server is listening on port', process.env.PORT)
        })
    })

    .catch((error) => {
       console.log(error)
    })

// // listen for requests
// app.listen(process.env.PORT, () => {
//     console.log('Server is listening on port', process.env.PORT);
// })
