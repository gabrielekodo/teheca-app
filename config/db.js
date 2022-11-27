module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DB: "sequelize_database_development",
  dialect: "postgres",
  // url: `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/sequelize_database_development`,
  url: "postgres://yuvofvhbntkonu:0bebdf6ee10a2fc5f40240274947f0890cb9c6bb06d6c7275a92f09c5ac8cebb@ec2-52-1-17-228.compute-1.amazonaws.com:5432/d35q7k0m177qke",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
