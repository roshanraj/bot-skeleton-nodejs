var express = require('express');
var router = express.Router();
var UserModel = require('../model/user')
const {Wit, log} = require('node-wit');
/* GET users listing. */
router.get('/',function(req, res) {
  const client = new Wit({
    accessToken: "7HI5URXOESVF36QLR65OBPK3SA7OUEZR",
    logger: new log.Logger(log.DEBUG) // optional
  });
  // console.log(client.message('set an alarm tomorrow at 7am'));
  let response = client.message('set an alarm tomorrow at 7am');
  response.then((data)=>{
    console.log(data);
    res.send(data);
  }).catch((err)=>{
    console.log(err);
  });
  
  // console.log(id);
  // UserModel.find({}, function(err, users) {
  //   if (err) throw err;
  //   // object of all the users
  //   console.log(users);
  //   res.send(users);
  // });
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

// router.use((req, res, next)=>{
//   console.log(897);
//   res.send({"status":"failed"});
// });

module.exports = router;
