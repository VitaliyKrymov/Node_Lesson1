const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

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
const userInfo = req.body;
console.log(userInfo);
userDB.push(userInfo);

    res.status(201).json("Created");

});

app.put('/users/:userId', (req, res) => {
    const newUserInfo = req.body;
    const {userId} = req.params;

    userDB[userId] = newUserInfo;

    res.json('Updated')
});


app.listen(5000, () => {
    console.log('Server listen 5000');
});
