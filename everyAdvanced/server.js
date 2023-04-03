const express = require('express');
const connectDB = require("./config/dbConnection")
const errorHandler = require('./middleWare/errorhandler.js');
const dotenv = require('dotenv').config();

connectDB()
const app = express();

//prevent already runining errror, this will find which ever is etmpy and use it
const port = process.env.PORT || 5001

//use is a middleware
app.use(express.json() ) 
app.use("/api/contacts", require("./routes/contactRoutes.js"))
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`running in port ${port}`)
});