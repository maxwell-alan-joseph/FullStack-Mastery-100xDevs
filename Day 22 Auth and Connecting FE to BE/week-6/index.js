const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();


const JWT_SECRET = "joseph2123"
app.use(express.json());

const users=[]

function auth (req, res, next) {}

app.post("/signup", auth, (req, res) => {
     const username = req.body.username; 
     const password = req.body.password

     users.push({
        username, 
        password
     })
     res.send({
        message: "You are signed in"
     })
});

app.post("/signin", auth, (req, res) => {
    const username = req.body.username;
    const password = req.body.password

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign( {
            username: user.username
        }, JWT_SECRET);

        user.token = token; 
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

app.get("/me", auth, (req, res) => {
    const token = req.headers.authorization;
    const userDetails = jwt.verify(token, JWT_SECRET);

    const username = userDetails.username; 
    const user = users.find(user => user.username === username);

    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }

});