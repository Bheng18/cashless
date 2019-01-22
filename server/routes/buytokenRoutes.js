//const nemSDK = require('../models/nemSDK');
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    // if (req.body.token == 10) {
    res.render("myWallet.pug", { token: "10" });
    // }  else if (req.body.token == 49) {
    //   res.render("myWallet.pug", { token: "50" });
    // } else {
    //   res.render("myWallet.pug", { token: "100" });
    // }
    console.log(req.body);
});

module.exports = router;