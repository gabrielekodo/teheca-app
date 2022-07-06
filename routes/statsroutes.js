const express = require("express");
const Procurement = require("../models/ProcumentModel");
const Cashsale = require("../models/CashsalesModel");
const Creditsale = require("../models/CreditModel");
const CreditModel = require("../models/CreditModel");

// const Employee = require("../models/EmployeeModel");
const router = express.Router();

//GET REQUEST TO /
router.route("/").get((req, res) => {
  try {
    // console.log(req.session.user);
    if (req.session.user.role === "director") {
      res.render("totals", { title: "Stats", user: req.session.user });
    } else {
      res.redirect("/dashboard");
    }
  } catch (error) {
    res.redirect("/");
  }
});

module.exports = router;
