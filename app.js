const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt=require('jsonwebtoken')
const morgan=require('morgan')
const path = require("path");
const database = require("./config/db");
require("dotenv").config({ path: "./config/config.env" });
const passport = require("passport");

//connect Database
database();

const Userlogin = require("./models/EmployeeModel");

//requiring the routes.
const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/sales");
const usersRoutes = require("./routes/users");
const purchaseRoutes = require("./routes/statsroutes");
const reportRoutes=require('./routes/aggregations')

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
app.use(morgan('dev'))
app.use(passport.initialize());
app.use(passport.session());

passport.use(Userlogin.createStrategy());
passport.serializeUser(Userlogin.serializeUser());
passport.deserializeUser(Userlogin.deserializeUser());



// routes middleware
app.use("/api/auth", authRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/sales", productsRoutes);
app.use('/api/reports',reportRoutes)

// handling non existing routes
app.get("*", (req, res) => {
  res.status(404).json({ status: "fail", msg: "404 Sorry Page Not Found" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
