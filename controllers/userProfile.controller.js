const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models");
const ProfileInfo = db.userProfileInfo;
const Op = db.Sequelize.Op;

exports.userProfileInfo = (req, res) => {
  const userInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    address: req.body.address,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    maritalStatus: req.body.maritalStatus,
    gender: req.body.gender,
    institution: req.body.institution,
    award: req.body.award,
    graduationDate: req.body.graduationDate,
    organizationOne: req.body.organizationOne,
    organizationLocationOne: req.body.organizationLocationOne,
    positionOne: req.body.positionOne,
    workStartDateOne: req.body.workStartDateOne,
    workEndDateOne: req.body.workEndDateOne,
    dutiesOne: req.body.dutiesOne,
    organizationTwo: req.body.organizationTwo,
    organizationLocationTwo: req.body.organizationLocationTwo,
    positionTwo: req.body.positionTwo,
    workStartDateTwo: req.body.workStartDateTwo,
    workEndDateTwo: req.body.workEndDateTwo,
    dutiesTwo: req.body.dutiesTwo,
    imageUrl: "",
    resumeUrl: "",
  };
  // Save User in the database
  ProfileInfo.create(userInfo)
    .then((data) => {
      res.json({ status: "ok", data });
    })
    .catch((err) => {
      res.status(500).json({
        status: "fail",
        message: err.message || "Some error occurred while submiting info.",
      });
    });
};

exports.singleUserInfo = (req, res) => {
  const id = req.params.id;

  ProfileInfo.findOne({ where: { id } })
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
