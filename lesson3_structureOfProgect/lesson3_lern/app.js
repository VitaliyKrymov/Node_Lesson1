const express = require('express');
const userRouter = require('./router/user.router')

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/users', userRouter);


app.get('/', (req, res) => {
  res.json('WELCOME')
})

app.listen(5000, () => {
  console.log('Server listen 5000');
});