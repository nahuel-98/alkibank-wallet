const express = require("express");
const { allUsers } = require("../controllers/user-controller");

const router = express.Router();

router.get("/users", allUsers);

router.get("/users/:id", idUser);

module.exports = router;
