const { Sequelize, DataTypes } = require('sequelize')

// Create a database instance
const db = new Sequelize({
    dialect: 'mysql',
    host: 'us-east.connect.psdb.cloud',
    username: 'wpwlquhwtvzi8st7abtf',
    password: 'pscale_pw_fKUgugnU3IgbPAL4gTgp9yho0RQblU9h7Wz6xVGP75k',
    // port: 5432,
    database: 'evolutec',
    logging: false, // false to clear console
    dialectOptions: {
        ssl: { rejectUnauthorized: true },
    },
})

module.exports = { db, DataTypes }
