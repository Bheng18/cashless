const express = require("express");
const router = express.Router();
const UserSchema = require('../models/database');

router.get("/", (req, res) => {
  res.render("signup.pug", { title: "MikMik", bank: "Unionbank" });
});

//post for database mongodb
router.post('/', (req, res) => { //DITO NAG SAVE ANG ADD PRODUCT
  var tblModel = new UserSchema();
  tblModel.firstname = req.body.firstname;
  tblModel.lastname = req.body.lastname;
  tblModel.username = req.body.username;
  tblModel.password = req.body.password;
  tblModel.idstatus = req.body.idstatus;
  tblModel.save(function (err, data) {
    if (!err) {
      res.redirect('/users');
    } else {
      res.send({ err: tblModel });
    }
  });
  console.log(tblModel);
});



module.exports = router;