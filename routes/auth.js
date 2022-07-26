const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Employee = require("../models/EmployeeModel");
const Procurement = require("../models/ProcumentModel");
const router = express.Router();

//verify token
const verifyToken = (req, res, next) => {
  //get auth header value
  const bearerHeader = req.headers["authorization"];

  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split at space
    const bearer = bearerHeader.split(" ");

    //get token from array
    const bearerToken = bearer[1];

    //set the token
    req.token = bearerToken;
    //next middleware
    next();
  } else {
    //forbidden
    res.status(403).json({
      status: "fail",
      message: "access denied",
    });
  }
};
router.get("/login", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        status: "ok",
        message: "log in or register to access resource",
      });
    }
  });
});

router.post("/", (req, res) => {
  res.json({
    status: "ok",
    message: "welcome",
    data: req.body,
  });
});

//create EMPLOYEE
router.post("/createUser", async (req, res) => {
  console.log(req.body);
  try {
    await Employee.register(
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,

        employeeID: req.body.employeeID,
        role: req.body.role,
        branch: req.body.branch,
      },
      req.body.password
    );

    res.status(200).json({ status: "ok", user: req.body });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "something went wrong",
    });
    console.error(error);
  }
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/api/auth/failurejson" }),
  (req, res) => {
    console.log("&&&&&&&&&&&&&&&&&&&& LOGIN REQ BODY ", req.body);
    //giving a session to the user when successfully logged in.
    req.session.user = req.user;
    let user = req.session.user;

    jwt.sign({ user }, "secretkey", (err, token) => {
      res.json({
        token,
        user,
      });
    });
  }
);

//failure login
router.get("/failurejson", (req, res) => {
  res.status(200).json({
    status: "fail",
    message: "incorrect email or password",
  });
});

//GET REQUEST TO /
// router.route("/admin").get((req, res) => {
//   res.render("createAccount", { title: "Create Account" });
// });


router.route("/employees").get(async (req, res) => {
  try {
    const employees = await Employee.find({});

    res.status(200).json({
      status: "success",
      results: employees.length,
      data: employees,
    });
  } catch (error) {
    
    res.status(500).json({
      status: "fail",
      message: "something went wrong....",
    });
  }
});

// Route to Log out
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }

    res.status(204).json({ status: "ok", data: null });
  });
});

module.exports = router;
