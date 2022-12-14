const userDB = require("../dataBase/users.json");
const {fileServices} = require("../service");

module.exports ={
    getAllUsers: async (req,res,next)=>{
        try {
           const users=await fileServices.reader()

            res.json(users)
        }catch (e){
            next(e)
        }

    },

    create: async (req,res,next)=>{
        try {
            const userInfo = req.body;

            const users = await fileServices.reader();

            const newUser = {
                name: userInfo.name,
                age: userInfo.age,
                id: users[users.length -1].id + 1
            };
            users.push(newUser);

            console.log(users);

            await fileServices.writer(users);

            res.status(201).json(newUser);
        }catch (e){
            next(e)
        }

    },

    getUsersById: (req,res,next)=>{
        try {
            res.json(req.user);
        }catch (e){
            next(e)
        }

    },

    updateUser: (req,res,next)=>{
        try {
            const newUserInfo = req.body;
            const {userId} = req.params;

            userDB[userId]= newUserInfo;
            res.json('Updated');
        }catch (e){
            next(e)
        }

    }

}
// 12:34