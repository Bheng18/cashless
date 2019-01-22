const express = require("express");
const router = express.Router();
const UserSchema = require('../models/database');

router.get("/:id", (req, res)=>{
    UserSchema.findById({_id: req.params.id}, function(err, data) {
        res.render('editUserForm.pug', { users: data });
    });
});
  
  module.exports = router;