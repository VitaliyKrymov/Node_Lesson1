const express = require('express');
const {response} = require("express");

// ctrl+c step server
const app=express();

app.get('/',(req, res) =>{
    console.log(req);
    // res.end("thanks");
    res.send('<h1>HELLO</h1>')

} );

app.listen(5000,()=>{
    console.log('Apr listen 5000')
});

