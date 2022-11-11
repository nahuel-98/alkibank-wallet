const express = require("express");
const { validate, auth, ownershipTransaction, ownership } = require("../middlewares");
const { transactionSchema } = require("../schemas");
const router = express.Router()
const transactionsController = require("./../controllers/transactionsController")

//list
router.get("/", [auth(), ownership('query')], transactionsController.transactionList);

//detail

router.get("/:id", ownershipTransaction(), transactionsController.transactionDetail);

//create
router.post("/", validate(transactionSchema), transactionsController.transactionCreate);

//delete
router.delete("/:id", ownershipTransaction(), transactionsController.transactionDelete);

//update
router.put("/:id",
    [
        validate(transactionSchema),
        ownershipTransaction()
    ],
    transactionsController.transactionUpdate
);


module.exports = router;