const express = require("express");
const router = express.Router();
const UserSchema = require('../models/database');

router.get("/", (req, res) => {
    UserSchema.find({}, function (err, data) {
        res.render('users.pug', { users: data });
        //res.json({ users: data });    
    });
});

module.exports = router;