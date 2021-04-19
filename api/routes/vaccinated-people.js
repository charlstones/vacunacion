var express = require('express');

var router = express.Router();
var vaccinatedPeople = 
[
    {
    id: 1,
    firstName: 'Amanda',
    lastName: 'Martinez',
    secondLastName: 'Valdez',
    curp: 'XXX123XXX123XXX123',
    age: 50,
    state: 'Sonora',
    city:  'Obregon',
    postalCode: '23568',
    email: 'unemail@gmail.com',
    vaccinated: false
},
{
    id: 2,
    firstName: 'Jose',
    lastName: 'Lizarraga',
    secondLastName: 'Valdez',
    curp: 'XXX123XXX123XXX123',
    age: 50,
    state: 'Sonora',
    city:  'Obregon',
    postalCode: '23568',
    email: 'unemail@gmail.com',
    vaccinated: false
},
{
    id: 3,
    firstName: 'Luis',
    lastName: 'Martinez',
    secondLastName: 'Fernandez',
    curp: 'XXX123XXX123XXX123',
    age: 30,
    state: 'Baja California',
    city:  'Tijuana',
    postalCode: '23568',
    email: 'unemail@gmail.com',
    vaccinated: false
},
{
    id: 4,
    firstName: 'Armando',
    lastName: 'Guzman',
    secondLastName: 'Valdez',
    curp: 'XXX123XXX123XXX123',
    age: 60,
    state: 'Baja California',
    city:  'Tijuana',
    postalCode: '23568',
    email: 'unemail@gmail.com',
    vaccinated: false
},
{
    id: 5,
    firstName: 'Cesar',
    lastName: 'Salazar',
    secondLastName: 'Valdez',
    curp: 'XXX123XXX123XXX123',
    age: 60,
    state: 'Baja California',
    city:  'Mexicali',
    postalCode: '23568',
    email: 'unemail@gmail.com',
    vaccinated: false
},
{
    id: 6,
    firstName: 'Alberto',
    lastName: 'Gonzalez',
    secondLastName: 'Valdez',
    curp: 'XXX123XXX123XXX123',
    age: 50,
    state: 'Sonora',
    city:  'Obregon',
    postalCode: '23568',
    email: 'unemail@gmail.com',
    vaccinated: false
}
];
/* GET */

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

router.post('/', function(req, res, next) {
    console.log(req.body);
    req.body.forEach(vaccinatedUser => {  
        vaccinatedUser.id = vaccinatedPeople.length + 1;
        vaccinatedUser.vaccinated = false;
        vaccinatedPeople.push(vaccinatedUser)
    });
    res.json({message: 'Users were sucessfuly saved'})
});

module.exports = router;
