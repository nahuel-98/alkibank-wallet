
const ownership = (paramName = 'id') => {
    return async (req, res, next) => {
        try {
            const user_auth = req.user_auth;
            if (!user_auth) return res.status(403).send("User not logged in.");
    
            if (!user_auth.isAdmin() && user_auth.id != req.params[paramName]) {
                return res.status(403).send("The record does not belong to you.");
            }
    
            next();
        } catch (error) {
            res.status(400).send("Invalid token");
        }
    };
}

module.exports = ownership