//signup and signin logic 

import express from'express'
const app = express();
import jwt from'jsonwebtoken'
const JWT_SECRET = "joseph12345";

import { users } from "../users.js";

app.post("/singup", (req, res) => {
    let { username, password, email } = req.body;

    users.push({ username, password, email });
    res.send({ messsage: "You are signed UP"});
});

app.post("/signin", (req, res) => {
    let {username, password} = req.body; 

    const user = users.find( u => u.username === username && u.password === password );
    if(user){
        const token = jwt.sign({ username: user.username }, JWT_SECRET); 
        user.token = token;
        res.send({ token });
    } else {
        res.status(400).send({ message: "Invalid username or password" });
    }
}); 

export default app;


