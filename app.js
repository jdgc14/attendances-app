const express = require('express')

// Import routers
const { registrationRouter } = require('./routes/registrations.routes')

// Create app server
const app = express()

// Enable Express app to receive JSON data
app.use(express.json())

// Define endpoints
app.use('/api/v1/registrations', registrationRouter)

// Catch endpoints not found
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does not exists in our server`,
    })
})

module.exports = { app }
