const userDB = require("../dataBase/users");
const router = require('express').Router();
const controller = require('../controller/user.controller');
const middleware = require('../middleware/user.middleware');

router.get('/', controller.getAllUsers);

router.get('/:userId', middleware.checkIsUserExist, controller.getUsersById);

router.put('/:userId', middleware.checkIsUserExist, controller.updateUser);

router.post('/', (req, res) => {
    const userInfo = req.body;
    userDB.push(userInfo);
    res.status(201).json('Created')
});

module.exports = router;