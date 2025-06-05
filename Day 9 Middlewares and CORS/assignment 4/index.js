//requestCount
// You have to create a middleware for logging the number of requests on a server
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

const express = require ("express"); 
const app = express();

let requestCount = 0;


app.use((req, res, next) => {
    requestCount += 1;
    next();
});

app.get("/user", (req, res) => {
    res.status(200).json({ Name: "joe"});
});

app.post("/user", (req, res) => {
    res.status(200).json({ msg: "created an user"});
});

app.get("/requestCount", (req, res) => {
    res.status(200).json({ requestCount });
});


app.listen(3000, ()=>{
    console.log("server listening on port 3000");
});