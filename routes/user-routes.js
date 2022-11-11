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
const checkUserId = require("../middlewares/checkUserId");
const { ownership, auth } = require("../middlewares");

const router = express.Router();

router.get("", allUsers);

router.get("/:id", [checkUserId, auth(), ownership()], idUser);

router.post("", validate(userSchema), createUser);

router.patch("/:id", checkUserId, editUser); // ownership ?

router.delete("/:id", checkUserId, deleteUser);

module.exports = router;
