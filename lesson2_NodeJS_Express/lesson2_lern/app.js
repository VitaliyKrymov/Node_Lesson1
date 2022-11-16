const express = require('express');

const app = express();

const userDB = require('./dataBase/users')

app.get('/', (req, res) => {
    res.json('WELCOME')
});

app.get('/users', (req, res) => {
    // console.log('USERS ENDPOINT!');
    // res.status(200).json({user:'Vitaliy'});
    //  res.end('Its OK');
    res.status(200).json(userDB);
});

app.get('/users/1', (req, res) => {
    res.json(userDB[1]);
});
app.get('/users/:userId', (req, res) => {
     console.log(req.params);
    const {userId} = req.params
    res.json(userDB[userId]);
});

app.post('/users',(req,res)=>{
    res.status(201).json('Created');
})


app.listen(5000, () => {
    console.log('Server listen 5000');
});
