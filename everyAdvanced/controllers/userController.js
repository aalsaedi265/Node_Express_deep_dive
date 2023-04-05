const asyncHandler = require("express-async-handler")

const registerUser = asyncHandler(async (req, res)=>{
    res.json({message : "Regester the user"})
})
const loginUser = asyncHandler(async (req, res)=>{
    res.json({message : "Login the user"})
})
//private
const currentUser = asyncHandler(async (req, res)=>{
    res.json({message : "current the user"})
})




module.exports = { registerUser, loginUser, currentUser}