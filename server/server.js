const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// LOGGER (put this early)
app.use((req,res,next)=>{
console.log(req.method, req.url);
next();
});

// serve public folder
app.use(express.static("public"));

// ROUTE 1 - check balance
app.get("/balance", (req, res) => {
    res.json({ balance: 5000 });
});

// ROUTE 2 - send money
app.post("/sendMoney", (req, res) => {
    const { amount } = req.body;

    res.json({
        message: "Money sent successfully",
        amount: amount
    });
});

// ERROR HANDLING
app.get("/error", (req, res) => {
    try {
        throw new Error("Something went wrong");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});