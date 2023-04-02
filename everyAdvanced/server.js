const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

//prevent already runining errror, this will find which ever is etmpy and use it
const port = process.env.PORT || 5001
//use is a middleware
app.use("/api/contacts", require("./routes/contactRoutes.js"))

app.listen(port, ()=>{
    console.log(`running in port ${port}`)
});