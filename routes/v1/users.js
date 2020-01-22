const express = require('express');
const router = express.Router();

let users = [
    {
        id: 1,
        username: "test",
        password: "randomPassword",
        name: "Van",
        dateOfBirth: "1990-05-07",
        address: "Something street",
        city: "Moscow",
        country: "ru",
        email: "test@test.com"
    }
]

router.post('/users', (req, res, next) => {
    console.log("Hello /users");
    // const result = {
    //     id: 234655,
    // }
    console.log(req.body.hasOwnProperty('email'));
    
    console.log(req.body);
    if (req.body.hasOwnProperty('email')) {        
        users.push({
            id: users.length + 1,
            ...req.body
        })
        res.status(201).json(users);
    } else {
        res.status(400);
    }
})

router.post('/users/login', (req, res, next) => {
    console.log("Hello /users/login");
    // users.filter(user => user.username === req.body.username)
    users.forEach(user => {
        console.log(user);
        console.log(user.username === req.body.username || user.password === req.body.password);
        if ( user.username === req.body.username || user.password === req.body.password ) {
            res.status(200).json(user);
            // console.log("it should work");
        } else {
            res.status(400);
        }
    })      
})

router.get('/users', (req, res) => {
    try {
        // console.log("Hello GET /users");
        res.status(200).json(users);
    }
    catch(err) {
        console.log(err);
    }
})

router.get('/users/:id', (req, res) => {
    users.forEach(user => {
        if (user.id === +req.params.id) {
            res.status(200).json(user);
        } else {
            res.status(400).send("Ne fartanulo!");
            console.log("what?");
        }
    })
})

router.put('/users/:id', (req, res) => {
    users.forEach(user => {
        if (user.id === +req.params.id) {
            user.username = req.body.username,
            user.password = req.body.password,      
            user.name = req.body.name,      
            user.dateOfBirth = req.body.dateOfBirth,      
            user.address = req.body.address,      
            user.city = req.body.city,      
            user.country = req.body.country,      
            user.email = req.body.email
            res.status(200).json(user);
        } else {
            res.status(400);
        }
    })
})

router.delete('/users/:id', (req, res) => {
    console.log(users.forEach(user => user.id === +req.params.id ? user.id : null));
    try {
        // users.splice(users.indexOf(+req.params.id), 1);
        // console.log(user.id === +req.params.id);
        let cutElement = users.splice(users.indexOf(users.forEach(user => user.id === +req.params.id ? user.id : null), 1));
        console.log(cutElement);
        res.status(200).json(users);
    }
    catch(err) {
        // res.status(404).send(err);
        res.send(err);
        console.log("ne rabotaet!");
    }
})


module.exports = router;
