const mongoose = require('mongoose')

const contactSchema= mongoose.Schema(
    {
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref: "User"
    },
    name:{
        type: String,
        required: [true,"Please add the contact name"]
    },
    phone:{
        type: String,
        required: [true,"Please add the contact phone"]
        },
    occupation: {
        type: String,
        required: [true,"Please add the occupation"]
        }
      },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Contact",  contactSchema)