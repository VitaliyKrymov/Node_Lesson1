const userDB = require("../dataBase/users.json");
const router = require('express').Router();
const controller = require('../controller/user.controller');
const middleware = require('../middleware/user.middleware');

router.get('/', controller.getAllUsers);

router.post('/', middleware.isBodyValid ,controller.create);

router.get('/:userId', middleware.checkIsUserExist, controller.getUsersById);

router.put('/:userId', middleware.checkIsUserExist, controller.updateUser);

router.post('/', (req, res) => {
    const userInfo = req.body;
    userDB.push(userInfo);
    res.status(201).json('Created')
});

module.exports = router;