const express = require('express');
const bcrypt = require('bcrypt');
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
app.use(express.json());

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
    .then(() => console.log("Connected to DB"))
    .catch( e => console.error('Database connection error', e ))

const signupSchema = z.object({
    email: z.string().email({message: "Invalid email"}),
    password: z.string().min(8, {message: "password must be atleast 8 characters"}).max(20, {message: "password is too long"}),
    username: z.string().min(3, {message: "username must be atleast 3 characters"}).max(15, {message: "username is too long"})
})

const signinSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(1, { message: "Password is required" })
})

const todoSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
})

app.post("/signup", async (req, res) => {
    try {
        const validation = signupSchema.safeParse(req.body);

        if(!validation.success) {
            res.status(400).json({
                message: "validation failed", 
                errors: validation.error.issues
            })
            return;
        }

        const {email, password, username} = validation.data;
        const hashedPassword = await bcrypt.hash(password, 7);

        await UserModel.create({
            email, 
            password: hashedPassword,
            username
        });
        
        res.json({
            message: "You are signed up"
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error while signing up"
        })
    }
});

app.post("/signin", async (req, res) => {
    const validation = signinSchema.safeParse(req.body);

    if(!validation.success){
        res.status(400).json({
            message: "Validation failed",
            errors: validation.error.issues
        });
        return
    }

    const {email, password} = validation.data;

    const user = await UserModel.findOne({
        email
    });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(user && passwordMatch) {
        const token = jwt.sign ({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({ token });

    } else {
        res.status(400).json({
            message: "inavlid credentials"
        });
    }
    
});

app.post("/todo", auth, async (req, res) => {
    const validation = todoSchema.safeParse(req.body);

    if(!validation.success){
        res.status(400).json ({
            message: "validation failed",
            errors: validation.error.issues
        });
        return
    }

    const userId = req.userId;
    const {title, done} = validation.data;

    await TodoModel.create({
        userId,
        title,
        done
    })
    res.json({
        message: "Your todo has been created"
    })
});

app.post("/todos", async (req, res) => {
    const userId = req.userId;
    
    const todos = await TodoModel.find({
        userId
    })

    res.json({ todos })
});

app.listen(3000);

