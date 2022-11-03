const DB = require("./../database/models");

//CRUD pattern
const transactionsController={

    //Read
    transactionList: (req, res)=>{
        DB.transaction.findAll()
        .then(list=>{
            res.status(200).json(list)
        })
        .catch(err=>{
            res.status(500).json({msg: err.messege})
        })
    },

    //Detail
    transactionDetail: (req, res)=>{
        const transactionId = req.params.id
        DB.transaction.findById(transactionId)
        .then(transaction=>{
            res.status(200).json(transaction);
        })
        .catch(err=>{
            res.status(500).json({msg: err.messege})
        })
    },

    //Create
    transactionCreate: (req, res)=>{
        const transaction = {
            description: req.body.description,
            amount: req.body.amount,
            userId: req.body.userId,
            categoryId: req.body.categoryId,
            date: req.body.date
        }

        DB.transaction.create(transaction)
        .then(()=>{
            res.status(200).json({msg: "created succefull"})
        })
        .catch(err=>{
            res.status(500).json({msg: err.messege})
        })
    },

    //Delete
    transactionDelete: (req, res)=>{
        const transactionId= req.params.id

        DB.transaction.destroy({where: {id: transactionId}})
        .then(()=>{
            res.status(200).json({msg: "deleted succefull"})
        })
        .catch(err=>{
            res.status(500).json({msg: err.messege})
        })
    },

    //Update
    transactionUpdate: (req, res)=>{
        const transactionId= req.params.id
        const transaction = {
            description: req.body.description,
            amount: req.body.amount,
            userId: req.body.userId,
            categoryId: req.body.categoryId,
            date: req.body.date
        }

        DB.transaction.update(transaction, {where: {id: transactionId}})
        .then(()=>{
            res.status(200).json({msg: "updated succefull"})
        })
        .catch(err=>{
            res.status(500).json({msg: err.messege})
        })
    }
}

module.exports = transactionsController