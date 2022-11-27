const express = require("express");
const { verifyToken } = require("../controllers/auth");
const {
  userProfileInfo,
  singleUserInfo,
} = require("../controllers/userProfile.controller");
const router = express.Router();

// user profile routes
router.post("/", userProfileInfo);
router.get("/:id", singleUserInfo);

module.exports = router;
