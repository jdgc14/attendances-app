// const { DataTypes } = require('../utils/database.util')
const { Registration } = require('../models/registration.model')

const createRegistration = async (req, res) => {
    try {
        const newRegistration = await Registration.create()
        res.status(201).json({
            status: 'success',
            data: newRegistration,
        })
    } catch (err) {
        console.log(err)
    }
}

const readAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll()
        res.status(200).json({
            status: 'success',
            data: {
                registrations,
            },
        })
    } catch (err) {
        console.log(err)
    }
}

const readRegistrationById = async (req, res) => {
    try {
        const { registrationById } = req

        res.status(200).json({
            status: 'success',
            data: registrationById,
        })
    } catch (err) {
        console.log(err)
    }
}

const updateRegistrationById = async (req, res) => {
    try {
        const { exitTime } = req.body

        const { registrationById } = req

        await registrationById.update({
            status: 'out',
            exitTime,
        })

        res.status(200).json({
            status: 'success',
            data: registrationById,
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteRegistrationById = async (req, res) => {
    try {
        const { registrationById } = req

        await registrationById.update({
            status: 'cancelled',
            exitTime: null,
        })

        res.status(204).json({
            status: 'success',
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    createRegistration,
    readAllRegistrations,
    readRegistrationById,
    updateRegistrationById,
    deleteRegistrationById,
}
