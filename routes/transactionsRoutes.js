const express = require("express");
const router = express.Router()
const transactionsController = require("./../controllers/transactionsController")

//list
router.get("/", transactionsController.transactionList);

//detail
router.get("/:id", transactionsController.transactionDetail);

//create
router.post("/", transactionsController.transactionCreate);

//delete
router.delete("/:id", transactionsController.transactionDelete);

//update
router.put("/:id", transactionsController.transactionUpdate);


module.exports = router;