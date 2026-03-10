const express = require("express");
const router = express.Router();
const wallet = require("../data/wallet");

router.get("/", (req, res) => {
  res.json({ balance: wallet.balance });
});

module.exports = router;