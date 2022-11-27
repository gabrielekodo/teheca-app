const express = require("express");
const { verifyToken } = require("../controllers/auth");
const {
  register,
  findAll,
  findOne,
  update,
  deleteOne,
  deleteAll,
  findAllUsers,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/", register);
router.get("/?", findAll);
router.get("/", findAllUsers);
router.get("/:id", findOne);
router.put("/:id", update);

router.delete("/:id", verifyToken, deleteOne);
router.delete("/", deleteAll);

module.exports = router;
