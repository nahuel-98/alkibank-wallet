const { JWT } = require("../config/jwt");
const { User } = require("../database/models");


const auth = () => {
    return async (req, res, next) => {
        try {
            const token = req.header("x-auth-token");
            if (!token) return res.status(403).send("Access denied.");

            const decoded = JWT.decode(token);
            const user_auth = await User.findByPk(decoded.id);
            req.user_auth = user_auth;
            next();
        } catch (error) {
            res.status(400).send("Invalid token");
        }
    };
}

module.exports = auth