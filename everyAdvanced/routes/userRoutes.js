
const express = require("express")

const router = express.Router()

router.post("/register", (req, res)=>{
    res.json({message: "register the user"})
})
router.post("/login", (req, res)=>{
    res.json({message: "login the user"})
})
router.get("/current", (req, res)=>{
    res.json({message: "current"})
})


module.exports = router 