var express = require('express');
var router = express.Router();
var users = [
  {
    id: 1,
    userName: 'admin',
    password: 'admin',
    email: 'admin@gmail.com',
    role: 'admin'
  },
  {
    id: 2,
    userName: 'support',
    password: 'support',
    email: 'admin@gmail.com',
    role: 'none'
  }
]

router.get('/', function(req, res, next) {
   
  res.json(vaccinatedPeople);
})

router.get('/:id', function(req, res, next) {
  
  const user = vaccinatedPeople.find(user => user.id == req.params.id);
  if(user){ 
      res.send(user);
  } else {
      res.send("I couldn't find a patient");
  }
})

router.post('/login', function(req, res, next) {
  console.log(req.body);
  let user = users.find(user => user.userName == req.body.userName && user.password == req.body.password);
  if(user) {
    res.json(user);
  } else {
    res.status(400).json({message:"Can't find User"});
  }
});

module.exports = router;
