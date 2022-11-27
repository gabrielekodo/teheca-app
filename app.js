const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const path = require("path");

const db = require("./models");
require("dotenv").config({ path: "./config/config.env" });
const passport = require("passport");

//sync Database

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

//requiring the routes.
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const applicationsRoutes = require("./routes/applicants");

//instantiate the express server
const app = express();

//express sesssion
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 },
});

//express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession);
app.use(cors());
app.use(morgan("dev"));

// routes middleware
app.use("/api/auth", authRoutes);

app.use("/api/users", usersRoutes);
app.use("/api/applicants", applicationsRoutes);


// handling non existing routes
app.get("*", (req, res) => {
  res.status(404).json({ status: "fail", msg: "404 Sorry Page Not Found" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
