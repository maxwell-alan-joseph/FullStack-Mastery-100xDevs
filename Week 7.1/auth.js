const jwt = require('jsonwebtoken');
const JWT_SECRET = "randompassword";

function auth (req, res, next) {
    try {
        const token = req.headers.cookie;
        const decodedCookie = jwt.verify(token, JWT_SECRET); 

        if (decodedCookie) {
            req.userId = decodedCookie.id;
            next();
        } else {
            res.status(300).json({
                "message" : "Incorrect credentials"
            });
        } 
    } catch (error) {
        res.status(400).json({
            "message" : "Check your Credentials"
        });
    }
}


module.exports = {
    auth, JWT_SECRET
}