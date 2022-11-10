const express = require("express");
const checkUserId = require("../middlewares/checkUserId");
const ownership = require("../middlewares/ownership");
const validate = require("../middlewares/validator");
const { transactionSchema } = require("../schemas");
const router = express.Router()
const transactionsController = require("./../controllers/transactionsController")

//list
router.get("/", ownership(), transactionsController.transactionList);

//detail
router.get("/:id",
    [
        checkUserId,
        ownership()
    ],
    transactionsController.transactionDetail
);

//create
router.post("/", validate(transactionSchema), transactionsController.transactionCreate);

//delete
router.delete("/:id",
    [
        checkUserId,
        ownership()
    ],
    transactionsController.transactionDelete
);

//update
router.put("/:id",
    [
        checkUserId,
        validate(transactionSchema),
        ownership()
    ],
    transactionsController.transactionUpdate
);


module.exports = router;