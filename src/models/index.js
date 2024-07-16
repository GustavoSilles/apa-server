require("dotenv").config();
// const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')


const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
  

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.posts = require('../models/post.model.js')(db.sequelize, db.Sequelize)
db.users = require('../models/user.model.js')(db.sequelize, db.Sequelize)

db.users.sync()
db.posts.sync()
module.exports = db

//chave estrangeira
//https://sequelize.org/docs/v6/core-concepts/assocs/

