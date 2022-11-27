require("dotenv").config();
const dbConfig = require("../config/db");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

const Sequelize = require("sequelize");

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.url, config);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.js")(sequelize, Sequelize);
db.userProfileInfo = require("./userProfile.model.js")(sequelize, Sequelize);
module.exports = db;
