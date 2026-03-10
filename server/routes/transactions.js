const express = require("express");
const router = express.Router();
const wallet = require("../data/wallet");

router.get("/", (req, res) => {
  res.json(wallet.transactions);
});

module.exports = router;