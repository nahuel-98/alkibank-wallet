const express = require("express");
const router = express.Router();
const {uploadImages} = require('../controllers/image.controller')

router.post('/upload', uploadImages);

module.exports = router;