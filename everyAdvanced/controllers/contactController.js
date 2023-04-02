
const getContact=  (req, res) => {
    res.status(200).json( {"GER":"Absaloute Zero"})
}
const createContact = (req, res) => {
    console.log("the request body is ", req.body)
    res.status(201).json( {"GER":"Life Creation"})
}
const deleteContact =  (req, res) => {
    res.status(200).json( {"Deadly Queen":`Bite The Dust ${req.params.id}`})
}
const singleContact = (req, res) => {
    res.status(200).json( {"Message":`get contact ${req.params.id}`})   
}
const updateContact = (req, res) => {
    res.status(200).json( {"Stone Ocean":`String alteration ${req.params.id}`})
}
module.exports = {
    getContact, 
    createContact,
    updateContact,
    singleContact,
    deleteContact
}