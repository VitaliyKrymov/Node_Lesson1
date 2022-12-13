const userDB = require("../dataBase/users");

module.exports ={
    getAllUsers: (req,res)=>{
        console.log(('Users endpoint'));
        res.json(userDB)
    },

    getUsersById: (req,res)=>{
       res.json(req.user);
    },

    updateUser: (req,res)=>{
        const newUserInfo = req.body;
        const {userId} = req.params;

        userDB[userId]= newUserInfo;
        res.json('Updated');
    }

}
// 12:34