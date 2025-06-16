const express = require('express')
const app = express()

app.use(express.json());
const users = []

function generateToken(){
    let options = ['a', 'b', 'c', 'd', '1', '2', '3', '4', 'A', 'B', '!', '@', '#', '$'];

    let token=""; 
    for (let i=0; i<15; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username, 
        password
    })

    res.send({
        message: "You are signed up"
    })
});

app.post("/signin", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find( user => user.username === username && user.password === password);

    if (user) {
        const token = generateToken();
        user.token = token;
        
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message:"Invalid Username or Password"
        })
    }
});

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const user = users.find( user => user.token === token );

    if(user) {
        res.send({
            username: user.username
        });
    } else {
        res.send({
            message: "Authorization revoked, You're unauthorized to get this information"
        });
    }
});

app.listen(3000);