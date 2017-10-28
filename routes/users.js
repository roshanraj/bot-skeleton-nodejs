var express = require('express');
var router = express.Router();
var UserModel = require('../model/user')

/* GET users listing. */
router.options('/',function(req, res, next) {

  console.log(id);
  UserModel.find({}, function(err, users) {
    if (err) throw err;
    // object of all the users
    console.log(users);
    res.send(users);
  });
});

router.post('/', function(req, res, next){
  var body = req.body;
  var newU = new UserModel({
    name: body.name,
    phone: body.phone,
    email: body.email,
    date:Date() 
  });
  newU.save(function(err) {
    if (err){
      res.send(err);
    }else{
      res.send(JSON.stringify(newU));
    }
  });
  
})

router.use((req, res, next)=>{
  console.log(897);
  res.send({"status":"failed"});
});

module.exports = router;
