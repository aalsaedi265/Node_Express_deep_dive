const mongoose = require("mongoose")

const userSchema = mongoose.Schema.create({
    username:{
        type: String,
        require: [true, "pelase add user name"]
    },
    phone:{
        type: String,
        require: [true, "pelase add phone information"],
        unique: [true, "add unique phone number"]
    },
    occupation:{
        type: String,
        require : [true, "pelase add occupation information"]
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model("User", userSchema)