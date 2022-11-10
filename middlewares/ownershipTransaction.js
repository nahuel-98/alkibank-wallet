const { Transaction } = require("../database/models");

const ownershipTransaction = (paramName = 'id') => {
    return async (req, res, next) => {
        try {
            const user_auth = req.user_auth;
            if (!user_auth) return res.status(403).send("User not logged in.");

            const transaction = await Transaction.findByPk(req.params[paramName]);

            if (!transaction) return res.status(404).send("Transaction not found.");
    
            if (!user_auth.isAdmin() && user_auth.id != transaction.userId) {
                return res.status(403).send("The record does not belong to you.");
            }
    
            next();
        } catch (error) {
            res.status(400).send("Invalid token");
        }
    };
}

module.exports = ownershipTransaction