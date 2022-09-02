const { Sequelize, DataTypes } = require('sequelize')

// Create a database instance
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234abcd',
    port: 5432,
    database: 'attendances',
    logging: false, // false to disable logging clear console
})

module.exports = { db, DataTypes }
