const userDb = require('../dataBase/users');
const ApiError = require('../error/ApiError');


module.exports = {
    checkIsUserExist: (req, res, next) => {

        try {
            const {userId} = req.params;

            const user = userDb[userId];

            // console.log(user);

            if (!user) {
                throw new ApiError('User not found',503)
            }

            req.user = user;

            next();

        } catch (e) {
           // next({message:'TEST', status:418})
           next(e)
        }

    }
}
