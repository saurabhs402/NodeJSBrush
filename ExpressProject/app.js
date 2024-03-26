const express = require('express')
const morgan = require('morgan')
const moviesRouter = require('./Routes/movieRoutes')


const app = express();


const logger = function (req, res, next) {
    console.log("Custom middleware called")
    next();
}

// adding middleware
app.use(express.json())

// using morgan middleware
// only log in development environment
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))


//Serving Static files

app.use(express.static('./public'))

// adding custom middleware
app.use(logger)



app.use(function (req, res, next) {
    // similar way middleware add body property to req object
    req.requestedAt = new Date();
    next();

})

// Middleware for handling or mounting routes
app.use('/api/v1/movies/', moviesRouter)

module.exports = app



