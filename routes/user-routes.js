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

router.get("/users", allUsers);

router.get("/users/:id", idUser);

router.post("/users", validate(userSchema), createUser);

router.put("/users/:id", editUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
