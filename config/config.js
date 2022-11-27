require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "sequelize_database_development",
    host: DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false, // This line will fix new error
      },
    },
    // url: "postgres://gabriel:gabriel@127.0.0.1:5432/sequelize_database_development",
    url: "postgres://yuvofvhbntkonu:0bebdf6ee10a2fc5f40240274947f0890cb9c6bb06d6c7275a92f09c5ac8cebb@ec2-52-1-17-228.compute-1.amazonaws.com:5432/d35q7k0m177qke",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "sequelize_database_test",
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "sequelize_database_production",
    host: DB_HOST,
    dialect: "postgres",
  },
};
