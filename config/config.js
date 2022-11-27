require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DATABASE_URL } = process.env;

module.exports = {
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "d35q7k0m177qke",
    host: DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: false, // This will help you. But you will see nwe error
        rejectUnauthorized: false, // This line will fix new error
      },
    },
    url: DATABASE_URL,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "sequelize_database_test",
    host: DB_HOST,
    dialect: "postgres",
  },
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "sequelize_database_production",
    host: DB_HOST,
    dialect: "postgres",
  },
};
