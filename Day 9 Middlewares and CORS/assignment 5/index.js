//authMiddleware
//  Implement an authentication middleware that checks for a valid API key in the request headers.

const express = require('express');
const app = express();
const VALID_API_KEY = 'trustworthy-sample-valid-api-key'; 


function authenticateAPIKey(req, res, next) {
    const apiKey = req.header('api-key'); 

    if (apiKey && apiKey === VALID_API_KEY) {
        return next(); 
    } else {
        return res.status(401).json({ message: 'Invalid or missing API key' }); 
    }
}

app.use(authenticateAPIKey); 

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

app.listen(3000, ()=> {
    console.log("server started at port 3000")
})