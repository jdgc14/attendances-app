// Import models
const { Registration } = require('../models/registration.model')

// Validate registration exist
const findRegistration = async (req, res, next) => {
    try {
        const { id } = req.params

        const registrationById = await Registration.findOne({ where: { id } })

        // If registration by id doesn't exist send message error
        if (!registrationById) {
            return res.status(404).json({
                status: 'error',
                message: `Registration by ${id} id not found`,
            })
        }
        req.registrationById = registrationById
        next()
    } catch (err) {
        console.log(err)
    }
}

// Validate status of registration is 'working'
const registrarionIsActive = async (req, res, next) => {
    try {
        const { registrationById } = req

        if (registrationById.status !== 'working') {
            return res.status(400).json({
                status: 'error',
                message: `Registration already ${registrationById.status}`,
            })
        }
    } catch (err) {
        console.log(err)
    }
    next()
}

module.exports = { findRegistration, registrarionIsActive }
