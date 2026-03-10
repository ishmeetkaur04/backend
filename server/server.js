const express = require("express");
const cors = require("cors");

const balanceRoute = require("./routes/balance");
const transactionsRoute = require("./routes/transactions");
const sendMoneyRoute = require("./routes/sendMoney");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PayForge Backend Running");
});

app.use("/balance", balanceRoute);
app.use("/transactions", transactionsRoute);
app.use("/send-money", sendMoneyRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});