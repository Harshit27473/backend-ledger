const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

async function userRegisterController(req,res){

    const {email,name,password} = req.body
    const isExist = await userModel.findOne({
        email:email
    })
    if(isExist){
        return res.status(422).json({
            message:"email already exists, please use a different email",
            status:"fail"
        })
    }
    const user = await userModel.create({
        email,
        name,
        password
})
    const token = jwt.sign({userid:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"3d"})
    res.cookies("token",token)
    res.status(201).json({
        user:{
            _id:user._id,
            email:user.email,
            name:user.name

        },
        token
    })
}
module.exports = {userRegisterController}

