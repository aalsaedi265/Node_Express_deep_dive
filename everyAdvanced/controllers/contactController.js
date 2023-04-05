const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//async to reslove the promis of the database
//async handler to reslove the try catch fro the all the promises

const getContact=  asyncHandler( async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json( contacts)
})

const createContact = asyncHandler( async (req, res) => {
    console.log("the request body is ", req.body)

    const {name, occupation,phone} = req.body
    if(!name || !phone || !occupation){

        res.status(400).json
        throw new Error("All fields are required")
    }
    const person = await Contact.create({name, occupation, phone})

    res.status(201).json(person)
})

const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json( {"Deadly Queen":`Bite The Dust ${req.params.id}`})
})
const singleContact = asyncHandler( async (req, res) => {

    const singleContact = await Contact.findById(req.params.id)
    if(!singleContact){
        res.status(404)
        throw new Error("Contact Not Found")
    }

    res.status(200).json(singleContact)   
})
const updateContact = asyncHandler( async (req, res) => {
    let singleContact = await Contact.findById(req.params.id)
    if(!singleContact){
        res.status(404)
        throw new Error("Contact not FOUND")
    }
    const update= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(update)
})
module.exports = {
    getContact, 
    createContact,
    updateContact,
    singleContact,
    deleteContact
}