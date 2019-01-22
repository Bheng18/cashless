const express = require("express");
const router = express.Router();
const UserSchema = require('../models/database');

router.get("/", (req, res) => {
    res.render("index.pug", { title: "MikMik",bank: "Unionbank" });
  });

  //post for database mongodb
  router.post('/', (req, res) => { //DITO NAG SAVE ANG ADD PRODUCT
    var tblModel = new UserSchema();
    tblModel.firstname = req.body.firstname;
    tblModel.lastname = req.body.lastname;
    tblModel.idstatus = req.body.idstatus;
    tblModel.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: tblModel });
      
    });
    console.log(tblModel);
  });

  

  module.exports = router;