
const express = require('express');
const router = express.Router();

router.route("/").get( (req, res) => {
    res.status(200).json( {"GER":"Absaloute Zero"})
})

router.route("/:id").get( (req, res) => {
    res.status(200).json( {"Message":`get contact ${req.params.id}`})
})

router.route("/").post( (req, res) => {
    res.status(200).json( {"GER":"Life Creation"})
})

router.route("/:id").put( (req, res) => {
    res.status(200).json( {"Stone Ocean":`String alteration ${req.params.id}`})
})

router.route("/:id").delete( (req, res) => {
    res.status(200).json( {"Deadly Queen":`Bite The Dust ${req.params.id}`})
})

module.exports = router;