const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const userDB = require('./dataBase/users')

app.get('/', async (req, res) => {
    await res.json('WELCOME')
});

app.get('/users',async (req, res) => {
    // console.log('USERS ENDPOINT!');
    // res.status(200).json({user:'Vitaliy'});
    //  res.end('Its OK');
    await res.status(200).json(userDB);
});

app.get('/users/1',async (req, res) => {
    await res.json(userDB[1]);
});
app.get('/users/:userId',async (req, res) => {
     // console.log(req.params);
     const {userId} = req.params;
    await res.json(userDB[userId]);
});

app.post('/users',async(req,res)=>{
const userInfo = req.body;
console.log(userInfo);
userDB.push(userInfo);

    await res.status(201).json("Created");

});

app.put('/users/:userId',async (req, res) => {
    const newUserInfo = req.body;
    console.log(newUserInfo);
    const {userId} = req.params;

    userDB[userId] = newUserInfo;

    await res.json('Updated')
});

app.delete('/users/:userId', async (req,res)=>{
    const {userId}=req.params;
    userDB[+userId]=null;
    console.log("Deleted user[",userId,']');
    await res.json("Deleted user")
});

app.listen(5000, () => {
    console.log('Server listen 5000');
});
