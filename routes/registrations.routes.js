const express = require('express')

const {
    createRegistration,
    readAllRegistrations,
    readRegistrationById,
    updateRegistrationById,
    deleteRegistrationById,
} = require('../controllers/registrations.controllers')

// Create registrationRouter
const registrationRouter = express.Router()

// Create endpoints
registrationRouter.post('/', createRegistration)
registrationRouter.get('/', readAllRegistrations)
registrationRouter.get('/:id', readRegistrationById)
registrationRouter.patch('/:id', updateRegistrationById)
registrationRouter.delete('/:id', deleteRegistrationById)

module.exports = { registrationRouter }
