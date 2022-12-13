const express = require('express');
require('dotenv').config();

const configs = require('./config/config')
const userRouter = require('./router/user.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.get('/', (req, res) => {
    console.log(('SERVER STARTED!'));
    res.json('Server started. WELCOME!')
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        massage: err.massage || 'Unknown error',
        status: err.status || 500
    })
});

// app.listen(5000,()=>{
// app.listen(process.env.PORT,()=>{
app.listen(configs.PORT, () => {
    console.log(typeof process.env.PORT, 'PORT=', process.env.PORT);
    console.log(`Server listen port : ${configs.PORT}`)
});