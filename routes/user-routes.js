const express = require("express");
const {
  allUsers,
  idUser,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/user-controller");
const validate = require("../middlewares/validator");
const userSchema = require("../schemas/userSchema");

const router = express.Router();

router.get("", allUsers);

router.get("/:id", idUser);

router.post("", validate(userSchema), createUser);

router.put("/:id", editUser);

router.delete("/:id", deleteUser);

module.exports = router;
