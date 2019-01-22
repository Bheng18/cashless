const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("balance.pug", { title: "MikMik",bank: "Unionbank" });
  });

  module.exports = router;