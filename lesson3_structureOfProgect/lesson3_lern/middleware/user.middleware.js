const userDb= require('../dataBase/users')

module.exports={
    checkIsUserExist:(req,res,next)=>{

        try{
            const {userId}=req.params;

            const user = userDb[userId];

            console.log(user);

            if(!user){
                throw new Error('User not found')
            }

            req.user=user;

            next();
        }catch (e){
        next(e);
        }

    }
}