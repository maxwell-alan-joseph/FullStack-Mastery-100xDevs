const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.error('Database connection error: ', err));
const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    await UserModel.create({
        email: email, 
        username: username,
        password: password
    })

    res.json({
        "message" : "You are logged In"
    })
});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email, 
        password: password
    })

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        });
    }else {
        res.status(400).json({
            "message" : "Unauthorized Credentials Sorry Cannot log  you in"
        })
    }
});

app.post("/todo", auth,  async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId, 
        title,
        done
    });

    res.json({
        "message" : "Your Todo hasbeen created"
    })
});

app.get("/listoftodos", auth,  async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);