
const express = require('express');
const router = express.Router();
const validateToken = require("../middleWare/validateToken")
const {
    getContact, 
    createContact,
    updateContact,
    singleContact,
    deleteContact
                    } = require('../controllers/contactController');


router.use(validateToken)

router.route("/").get(getContact).post(createContact)

router.route("/:id").get(singleContact).delete(deleteContact).put(updateContact)


module.exports = router;