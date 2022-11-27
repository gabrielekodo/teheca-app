const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const salt = bcrypt.genSaltSync(10);

//login a user
exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ where: { email } })
    .then((user) => {
      if (user) {
        // const res = bcrypt.compareSync(password, user.passwordHash);
        bcrypt.compare(password, user.passwordHash, function (err, response) {
          if (response) {
            jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
              res.json({
                status: "ok",
                token,
                user,
              });
            });
          } else {
            res.json({
              status: "fail",
              message: "not authorized",
            });
          }
        });
      } else {
        res.status(404).json({
          message: `Cannot find user with email=${email}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving user with email=" + email,
      });
    });
};

// Create and Save a new User
exports.register = (req, res) => {
  // Validate request
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.password ||
    !req.body.confirmPassword
  ) {
    res.status(400).send({
      message: "supply all neccessary content!",
    });
    return;
  }

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      // Store hash in your password DB.
      // Create a User
      const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        passwordHash: hash,

        acceptedTerms: req.body.acceptedTerms ? req.body.acceptedTerms : false,
      };
      // Save User in the database
      User.create(user)
        .then((data) => {
          res.json({ status: "ok", data });
        })
        .catch((err) => {
          res.status(500).json({
            status: "fail",
            message:
              err.message || "Some error occurred while creating account.",
          });
        });
    });
  });
};

// Retrieve all Users from the database with condition.
exports.findAll = (req, res) => {
  const firstName = req.query.firstName;
  var condition = firstName
    ? { firstName: { [Op.like]: `%${firstName}%` } }
    : null;

  User.findAll({ where: condition })
    .then((data) => {
      res.json({ status: "ok", data });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving info.",
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find user with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving user with id=" + id,
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          status: "ok",
          message: "user was updated successfully.",
        });
      } else {
        res.json({
          message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error updating user with id=" + id,
      });
    });
};

// Delete a User with the specified id in the request
exports.deleteOne = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          status: "ok",
          message: "User was deleted successfully!",
        });
      } else {
        res.json({
          status: "fail",

          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: "fail",
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.json({
        status: "ok",
        message: `${nums} Users were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "fail",
        message: err.message || "Some error occurred while removing all Users.",
      });
    });
};

// Find all published Users
exports.findAllUsers = (req, res) => {
  User.findAll()
    .then((data) => {
      res.json({ status: "ok", results: data.length, data });
    })
    .catch((err) => {
      res.status(500).json({
        status: "fail",
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};
