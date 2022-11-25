const userDb = require("../dataBase/users");

module.exports = {
    getAllUsers: async (req, res) => {
        console.log('USERS ENDPOINT!');

        await res.json(userDb);
    },
    getUserById: async (req, res) => {
        const {userId} = req.params;

        await res.json(req.user);
    },
    updateUser: async (req, res) => {
        const newUserInfo = req.body;
        const {userId} = req.params;

        userDb[userId] = newUserInfo;

        await res.json('Updated')
    }
}