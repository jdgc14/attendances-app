const express = require('express')

// Import controllers
const {
    createRegistration,
    readAllRegistrations,
    readRegistrationById,
    updateRegistrationById,
    deleteRegistrationById,
} = require('../controllers/registrations.controllers')

// Import middlewares
const {
    findRegistration,
    registrarionIsActive,
} = require('../middlewares/registrations.middlewares')

// Create registrationRouter
const registrationRouter = express.Router()

// Create endpoints
registrationRouter.post('/', createRegistration)
registrationRouter.get('/', readAllRegistrations)
registrationRouter.get('/:id', findRegistration, readRegistrationById)
registrationRouter.patch(
    '/:id',
    findRegistration,
    registrarionIsActive,
    updateRegistrationById
)
registrationRouter.delete(
    '/:id',
    findRegistration,
    registrarionIsActive,
    deleteRegistrationById
)

module.exports = { registrationRouter }
