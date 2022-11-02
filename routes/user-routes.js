const express = require("express");
const { allUsers } = require("../controllers/user-controller");

const router = express.Router();

router.get("/users", allUsers);

module.exports = router;
