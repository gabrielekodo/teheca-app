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

//GET ALL EMPLOYEES

//GET EMPLOYEE

//GET REQUEST TO /createUser
router.route("/createUser").get((req, res) => {
  res.render("createEmployee", { title: "Create Employee" });
});
// router.route("/login").get((req, res) => {
//   res.render("login", { title: "Create Employee" });
// });

//create EMPLOYEE
router.post("/createUser", async (req, res) => {
  console.log(req.body);
  try {
    Employee.register(
      {
        name: req.body.username,
        email: req.body.email,
        phone: req.body.phone,

        employeeID: req.body.employeeid,
        role: req.body.role,
        branch: req.body.branch,
      },
      req.body.password
    );

    res.render("success", { msg: "User created Successfully!" });
  } catch (error) {
    res.redirect("/createUser");
    console.error(error);
  }
});

//UPDATE EMPLOYEE

//DELETE EMPLOYEE

module.exports = router;
