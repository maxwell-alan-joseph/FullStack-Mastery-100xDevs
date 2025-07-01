const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.get("/sum/:a/:b", (req, res)=>{

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({sum: a + b});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
} );