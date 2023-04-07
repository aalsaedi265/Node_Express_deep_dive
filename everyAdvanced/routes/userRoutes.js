
const express = require("express")
const validateToken = require("../middleWare/validateToken")
const {
    registerUser,
    loginUser, 
    currentUser } = require("../controllers/userController")

const router = express.Router()

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/current", validateToken ,currentUser)


module.exports = router 