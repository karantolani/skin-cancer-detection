const {verifyJwtToken} = require("../services/auth");

function authenticateUser(req, res, next) {
    if (req.cookies.token) {
        const userId = verifyJwtToken(req.cookies.token);

        if (userId) {
            req.userId = userId;
            return next();
        }
    }

    return res.status(401).json({
        error: "Unauthorized"
    })
}

module.exports = authenticateUser;