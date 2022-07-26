const express = require("express");

const Employee = require("../models/EmployeeModel");
const router = express.Router();

//GET REQUEST TO /
router.route("/stats").get((req, res) => {
  try {
    console.log(req.session.user);
if(req.session.user.role ==='director'){
  res.render("totals", { title: "Stats", user: req.session.user });

}
else{
  res.redirect('/dashboard')
}
  } catch (error) {
    res.redirect('/')
  }
});



//GET REQUEST TO /createUser
router.route("/createUser").get((req, res) => {
  res.render("createEmployee", { title: "Create Employee" });
});






module.exports = router;
