const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


const User = new Schema ({
    email: {type: String, unique: true},
    password: String,
    username: String
})

const Todo = new Schema ({
    userId: ObjectId, 
    title: String, 
    done: Boolean
})

const UserModel  = mongoose.model("UserDB", User);
const TodoModel  = mongoose.model("TodoDB", Todo);

module.exports = {
    UserModel, 
    TodoModel
}
