const asyncHandler = require("express-async-handler");
//async to reslove the promis of the database
//async handler to reslove the try catch fro the all the promises

const getContact=  asyncHandler( async (req, res) => {
    res.status(200).json( {"GER":"Absaloute Zero"})
})

const createContact = asyncHandler( async (req, res) => {
    console.log("the request body is ", req.body)
    const {name, phone, occupation} = req.body
    if(!name || !phone || !occupation){
        res.status(400).json
        throw new Error("All fields are required")
    }
    res.status(201).json( {"GER":"Life Creation"})
})

const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json( {"Deadly Queen":`Bite The Dust ${req.params.id}`})
})
const singleContact = asyncHandler( async (req, res) => {
    res.status(200).json( {"Message":`get contact ${req.params.id}`})   
})
const updateContact = asyncHandler( async (req, res) => {
    res.status(200).json( {"Stone Ocean":`String alteration ${req.params.id}`})
})
module.exports = {
    getContact, 
    createContact,
    updateContact,
    singleContact,
    deleteContact
}