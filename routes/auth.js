const express = require("express");
const passport = require("passport");
const Employee = require("../models/EmployeeModel");
const Procurement = require("../models/ProcumentModel");
const router = express.Router();

//GET REQUEST TO /
router.route("/").get((req, res) => {
  res.render("home", { title: "Home" });
});
//GET REQUEST TO /login
router.route("/login").get((req, res) => {
  res.render("login", { title: "Login" });
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  (req, res) => {
    console.log("&&&&&&&&&&&&&&&&&&&& LOGIN REQ BODY ", req.body);
    //giving a session to the user when successfully logged in.
    req.session.user = req.user;

    // res.locals.user = req.user;
    console.log("********* AUTH SESSION ", req.session.user);
    res.locals.user = req.session.user;
    //redirect user to dashboard page after logging in.
    if (req.session.user.role == "director") {
      res.locals.user = req.session.user;
      res.redirect("/users/stats");
    } else {
      res.render("dashboard", { title: " success" });
    }
  }
);
//GET REQUEST TO /
// router.route("/admin").get((req, res) => {
//   res.render("createAccount", { title: "Create Account" });
// });

//GET REQUEST TO /dashboard
router.route("/dashboard").get(async (req, res) => {
  const products = await Procurement.find();
  // console.log(products.length);
  // console.log(req.user);
  // res.locals.user = req.user;
  // console.log("########### RES.LOCALS ",res.locals);
  res.render("dashboard", { title: "My Account", products: products });
});

router.route("/employees").get(async (req, res) => {
  try {
    const employees = await Employee.find({ email: "ekodogabriel@gmail.com" });
    const branches = employees.forEach((br) => {
      console.log(br.branch);
    });
    res.json({
      status: "success",
      results: employees.length,
      data: employees,
    });
  } catch (error) {
    console.log(error);
  }
});

// Route to Log out
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    console.log("$$$$$$$$$$$$$$$$$$$$$$ LOG OUT SESSION ", req.session);
    res.redirect("/");
  });
});

module.exports = router;
