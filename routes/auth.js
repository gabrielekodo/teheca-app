const express = require("express");
const passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login");
const Employee = require("../models/EmployeeModel");
const Procurement = require("../models/ProcumentModel");
const router = express.Router();

//GET REQUEST TO /
router.route("/").get((req, res) => {
  console.log(req.user);
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
    let user = req.session.user;
    // res.locals.user = req.user;
    console.log("********* AUTH SESSION USER", user);
    // res.locals.user = req.session.user;
    res.locals.user = user;
    //redirect user to dashboard page after logging in.
    if (req.session.user.role == "director") {
      res.redirect("/users/stats");
    } else {
      res.render("dashboard", { user, title: "Dashboard" });
    }
  }
);
//GET REQUEST TO /
// router.route("/admin").get((req, res) => {
//   res.render("createAccount", { title: "Create Account" });
// });

//GET REQUEST TO /dashboard
router.route("/dashboard").get(async (req, res) => {
  try {
    const products = await Procurement.find();
    console.log(products.length);
    const user = req.user;
    console.log(user);
    res.locals.user = user;
    if (
      req.session.user.role === "agent" ||
      req.session.user.role === "manager"
    ) {
      res.render("dashboard", {
        title: "My Account",
        products: products,
        user,
      });
    } else if (req.session.user.role === "director") {
      res.redirect("/stats");
    }

    // console.log("########### RES.LOCALS ",res.locals);
  } catch (error) {
    res.redirect("/");
  }
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
