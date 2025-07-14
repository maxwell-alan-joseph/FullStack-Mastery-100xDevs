const express = require('express');
const app = express();
const JWT = require('jsonwebtoken');
const JWT_SECRET = "loginpage"
const users = [];

app.use(express.json());

/*function generateToken(){
    let options = ['1', '2', '3', '4', 'q', 'w', 'e', 'a', 'c', '!', '@', '#', '$']; 

    let token=""; 
    for(let i = 0; i < 24; i++){
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
} */

app.post("/signup", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username, 
        password
    })

    res.send({
        message: "You are signedup Happy Coding!"
    })

});

app.post("/signin", (req, res) => {
    const username = req.body.username; 
    const password = req.body.password; 

    const user = users.find( user => user.username === username && user.password === password ); 

    if(user){
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

        user.token = token; 

        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or Password",
            message: "Check your username / password!"
        })
    }


});

app.get("/me", (req, res) => {
    const token = req.headers.authorize;
    const userDetails = jwt.verify(token, JWT_SECRET);

    const username = userDetails.username;

    const user = users.find( user => user.username === username );

    if(user){
        res.send({
            username: user.username
        });
    } else {
        res.status(403).send({
            messageg: "Authorization Revoked"
        });
    }
});

app.listen(3000);
