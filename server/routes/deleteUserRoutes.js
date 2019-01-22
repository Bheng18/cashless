const express = require("express");
const router = express.Router();
const UserSchema = require('../models/database');

//get instead of delete for database mongodb
router.get('/:id', (req, res) => {
    deleteUser(req, res);
});

function deleteUser(req, res) {
    UserSchema.deleteOne({ _id: req.params.id }, (err, data) => {
        if (!err) {
            res.redirect('/users');
        } else {
            console.log(err);
        }
    });
}

module.exports = router;