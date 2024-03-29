const router = require('express').Router();
const controller = require('../controller/user.controller');
const middleware =require('../middleware/user.middleware');

router.get('/', controller.getAllUsers);

router.get('/:userId',middleware.checkIsUserExist ,controller.getUserById);

router.put('/:userId',middleware.checkIsUserExist ,controller.updateUser);

module.exports  = router;