const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//bring in userSchema model
const UserSchema = require('../models/database');

router.get("/", (req, res) => {
    res.render("login.pug", { title: "MikMik", bank: "Unionbank" });
});


// Login Form
// router.get('/login', function(req, res){
//     res.render('login');
//   });

// Login Process
router.post('/login', function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

// logout
router.get('/logout', function (req, res) {
    req.logout();
    req.flash('success', 'You are logged out');
    res.redirect('/users/login');
});


module.exports = router;