//ratelimitter
// You have to create a middleware for rate limiting a users request based on their username passed in the header
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second


const express = require("express");
const app = express();

const numberofRequestForUser = {};

setInterval( () => {
    for (let userId in numberofRequestForUser) {
        numberofRequestForUser[userId] = 0;
    }
}, 1000);

app.use((req, res, next) => {
    const userId = req.headers["user-id"];

    if(!userId) {
        return res.status(404).json({
            error: "User-ID header missing"
        });
    }

    if (!numberofRequestForUser[userId]) {
        numberofRequestForUser[userId] = 1;
    } else {
        numberofRequestForUser[userId]++;
    }

    if (numberofRequestForUser[userId] > 2 ){
        return res.status(429).json({
            error: "Rate Limit Exceeded"
        });
    }

    next();
});


app.get("/sum/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({ ans: a + b});
});
app.get("/subtract/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({ ans: a - b});
});
app.get("/multiply/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({ ans: a * b});
});
app.get("/divide/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({ ans: a / b});
});

app.listen(3000, () =>{
    console.log("Server listening on port 3000");
});
