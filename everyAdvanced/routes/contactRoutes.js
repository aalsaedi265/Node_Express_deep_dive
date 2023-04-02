
const express = require('express');
const router = express.Router();
const {
    getContact, 
    createContact,
    updateContact,
    singleContact,
    deleteContact
                    } = require('../controllers/contactController');

router.route("/").get(getContact).post(createContact)
router.route("/:id").get(singleContact).delete(deleteContact).put(updateContact)
module.exports = router;