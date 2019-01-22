const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("scan.pug", { title: "MikMik",bank: "Unionbank" });
  });

  module.exports = router;