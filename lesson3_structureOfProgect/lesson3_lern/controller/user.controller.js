const userDb = require("../dataBase/users");

module.exports = {
    getAllUsers: async (req, res) => {
        console.log('USERS ENDPOINT!');

        await res.json(userDb);
    },
    getUserById: async (req, res, next) => {
        try {
            await res.json(req.user);
        } catch (e) {
            next(e)
        }

    },
    updateUser: async (req, res, next) => {
        try {
            const newUserInfo = req.body;
            const {userId} = req.params;

            userDb[userId] = newUserInfo;

            await res.json('Updated')
        } catch (e) {
            next(e)
        }
    }
}


