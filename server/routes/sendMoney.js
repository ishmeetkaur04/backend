const express = require("express");
const router = express.Router();
const wallet = require("../data/wallet");

router.post("/", (req, res) => {

  const { name, amount } = req.body;

  if (!name || !amount) {
    return res.status(400).json({ error: "Invalid request" });
  }

  wallet.balance -= amount;

  const newTransaction = {
    id: wallet.transactions.length + 1,
    name,
    amount,
    type: "sent"
  };

  wallet.transactions.push(newTransaction);

  res.json({
    message: `₹${amount} sent to ${name}`,
    balance: wallet.balance
  });

});

module.exports = router;