require('dotenv').config()

const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCALDB_URL)

// module.exports = sequelize

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;