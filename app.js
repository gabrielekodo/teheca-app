const express = require("express");
const mongoose = require("mongoose");
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
const statsRoutes = require("./routes/statsroutes");

//instantiate the express server
const app = express();

//setting up mongoose
// const config = require("./config/database");

//express sesssion
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 },
});

// views settings or configurations
app.set("view engine", "pug");
app.set("views", "./views");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(Userlogin.createStrategy());
passport.serializeUser(Userlogin.serializeUser());
passport.deserializeUser(Userlogin.deserializeUser());

// login checker
//const loginChecker = (req, res, next) => {
//console.log("%%%%%%%%%%%%%%%%%%% CHECKER CONSOLE ", req.session);

//   // only / and /login are allowed for unauthenticated users
//   if (req.path != "/login" && req.path != "/" && !req.session.user) {
//     res.redirect("/");
//   }
//   next();
// };
// app.use(loginChecker);
// login user

// routes
app.use("/stats", statsRoutes);
app.use("/", authRoutes);
app.use("/users", usersRoutes);
app.use("/sales", productsRoutes);

// handling non existing routes
app.get("*", (req, res) => {
  res.status(404).render("notFound", { msg: "404 Sorry Page Not Found" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
