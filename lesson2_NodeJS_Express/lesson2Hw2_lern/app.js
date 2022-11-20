const express = require('express');

const {fileServices} = require("../lesson2Hw2/services");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/users', async (req, res) => {
    // const buffer = await fs.readFile(path.join(__dirname, 'dataBase', 'users.json'));
    // const users = JSON.parse(buffer.toString());
    const users = await fileServices.reader();
    res.json(users);
});

app.get('/users/:userId', async (req, res) => {
    const {userId} = req.params;

    // const buffer = await fs.readFile(path.join(__dirname, 'dataBase', 'users.json'));
    //
    // const users = JSON.parse(buffer.toString());
    const users = await fileServices.reader();

    const user = users.find((user) => user.id === +userId);

    if (!user) {
        return res.status(404).json(`User with id=${userId} not found`)
    }

    res.json(user);
});

app.post('/users', async (req, res) => {
    const userInfo = req.body;

    if (userInfo.name.length < 3 || typeof userInfo.name !== 'string') {
        return res.status(400).json('Wrong name')
    }


    if (userInfo.age < 0 || Number.isNaN(+userInfo.age)) {
        return res.status(400).json('Wrong age')
    }


    // const buffer = await fs.readFile(path.join(__dirname, 'dataBase', 'users.json'));
    // const users = JSON.parse(buffer.toString());
    const users = await fileServices.reader();

    const newUser = {
        name: userInfo.name,
        age: userInfo.age,
        id: users[users.length - 1].id + 1
    };
    users.push(newUser);

    // await fs.writeFile(path.join(__dirname, 'dataBase', 'users.json'), JSON.stringify(users));
    await fileServices.writer(users);

    res.status(201).json(newUser);
});

app.put('/users/:userId', async (req, res) => {
    const newUserInfo = req.body;
    const {userId} = req.params;

    // const buffer = await fs.readFile(path.join(__dirname, 'dataBase', 'users.json'));
    // const users = JSON.parse(buffer.toString());
    const users = await fileServices.reader();

    const index = users.findIndex((user) => user.id === +userId);

    if (index === -1) {
        return res.status(404).json(`User with id=${userId} not found`)
    }

    users[index] = {...users[index], ...newUserInfo};

    // await fs.writeFile(path.join(__dirname, 'dataBase', 'users.json'), JSON.stringify(users));
    await fileServices.writer(users);
    res.status(201).json(users[index]);
});

app.delete('/users/:userId', async (req, res) => {
    const {userId} = req.params;

    // const buffer = await fs.readFile(path.join(__dirname, 'dataBase', 'users.json'));
    // const users = JSON.parse(buffer.toString());
    const users = await fileServices.reader();

    const index = users.findIndex((user) => user.id === +userId);

    if (index === -1) {
        return res.status(404).json(`User with id=${userId} not found`)
    }

    users.splice(index, 1);

    // await fs.writeFile(path.join(__dirname, 'dataBase', 'users.json'), JSON.stringify(users));
    await fileServices.writer(users);
    res.sendStatus(204);


})

app.get('/', async (req, res) => {
    await res.json('Welcome!');
})


app.listen(5000, () => {
    console.log('Server listen 5000');
})

