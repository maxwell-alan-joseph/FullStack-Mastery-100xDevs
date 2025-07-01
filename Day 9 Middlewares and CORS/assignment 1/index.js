//create a backend server in nodejs that return the sum endpoint
const express = require("express");
const app = express ();

const loggerMiddleware = (req, res, next) => {
    console.log( `[${new Date().toISOString()}] ${req.method} ${req.url}` );
    next();
}

app.use(loggerMiddleware);

app.get("/sum/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({ sum: a + b});
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});
