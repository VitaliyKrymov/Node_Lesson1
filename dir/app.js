const express = require('express');
const expressHbs= require('express-handlebars');// для відтворення handlebars
const path = require('path');

//даємо доступ до папки static
app.use(express.static(path.join(__dirname,'static')));
//настроюємо двигун для відтворення handlebars
app.set('view engine','.hbs');// налаштовуємо опція view engine

//для двигуна .hbs буде використовуватись функція яка буде наш двигун обробляти - expressHbs(це обробник)
//вказуємо дефолтний аут- defaultLayout:false -потрібен щоб завжди не шукати файл main.hbs
app.engine('.hbs',expressHbs({defaultLayout:false }));
//настроюємо views і вказуємо шлях дe вони знаходяться( wt ,elt
app.set('views',path.join(__dirname,'static'));

const {response, request} = require("express");
// ctrl+c 'stop server'
const app=express();
//ping-pong роут для тесту арр що вона щось обробляє
app.get('/ping',(req, res) => {
    res.json('pong')
});
//app на метод get буде отримувати дані
app.get('/',(req, res) =>{
    // console.log(req);
    // res.end("thanks");
//     res.send('<h1>HELLO</h1>') //вертаєм відповідь
//     res.json({name:'Vitaliy'});//приймає обєкт і вертає json
//     res.write('Hello')
//     res.write('World')
//     res.write('222')
//     res.end()//поки не буде res.end() то res.write не закінчує обробку
    res.status(404).end('Not found')
 } );
//на запит- роут:  /users сервак віддасть відповідь у вигляді json масиву юзерів
app.get('/users',(req, res) => {
res.render('users');//рендерит ('users')

    // res.json([{name:'Vasia'},{name: 'Tania'}]) //видає масив юзерів
});

app.listen(5000,()=>{
    console.log('Apr listen 5000')
});
//ставимо express-handlbars прописуючи в консолі: npm i express-handlebars

