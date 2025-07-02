const jwt = require('jsonwebtoken');
const JWT_SECRET = "random_password"

function auth (req, res, next){
    try{
        const token = req.headers.token;
        const decodedToken = jwt.verify( token, JWT_SECRET);

        if (decodedToken) {
            req.userId = decodedToken.userId;
            next();
        } else {
            res.status(400).json ({
                message: "invalid creds"
            })
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    auth, JWT_SECRET
}