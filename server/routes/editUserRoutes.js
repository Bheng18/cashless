const express = require("express");
const router = express.Router();
const UserSchema = require('../models/database');

  //post for database mongodb
  router.post('/:id', (req, res) => { //DITO NAG SAVE ANG ADD PRODUCT // kaya di nag update dahil no name sa form e.g: inpt type='' name='firstname'
        updateUser(req, res);
  });

  function updateUser(req, res){
      UserSchema.findOneAndUpdate({_id: req.params.id}, 
        { $set: { firstname: req.body.firstname, lastname: req.body.lastname, idstatus: req.body.idstatus }}, { new: true }, ( err, data ) => {    
      if(!err){
          res.redirect('/users');
      }else{
        console.log(err);
      }
      }); 
  }
  
  module.exports = router;