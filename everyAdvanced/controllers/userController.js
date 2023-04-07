const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")






const registerUser = asyncHandler(async (req, res)=>{

    const {name, phone, occupation} = req.body;

    if(!name || !phone || !occupation){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userAvailable= await User.findOne({occupation})

    if(userAvailable){
        res.status(400)
        throw new Error("user already regesterd")
    }
    const hashPassword = await bcrypt.hash(occupation, 10)
    const user= await User.create({
        name,
        phone,
        occupation: hashPassword
    })
    console.log(`User created ${user}`)

    if(user){
        res.status(201).json({_id: user.id, phone:user.phone })
    }else{
        res.status(400)
        throw new Error("user data not valid")
    }
    res.json({message : "Regester the user"})
})





const loginUser = asyncHandler(async (req, res)=>{
    const {phone,occupation} = req.body
    if( !phone || !occupation){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const user = await User.findOne({phone})

    if(user && (await bcrypt.compare(occupation, user.occupation)))
    {
        const accessToken = jwt.sign({
            user:{
                name: user.name,
                phone: user.phone,
             
                occupation: user.occupation,
                id: user.id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "100m"}
        )
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("phone or occupation is not valid")
    }
}) 




//private
const currentUser = asyncHandler(async (req, res)=>{
    res.json(req.user)
})




module.exports = { registerUser, loginUser, currentUser}