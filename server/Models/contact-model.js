const mongoose = require ("mongoose");
const contactModel = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        message:{
            type:String,
            require:true
        },
    }
)
const Contact = mongoose.model("Contact", contactModel);
module.exports = Contact;