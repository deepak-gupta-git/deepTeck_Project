const Contact = require ("../Models/contact-model");

const contactFarm = async (req, res) =>{
    try {
        const response = req.body;
        console.log(response);
        await Contact.create(response)
        return res.status(200).json({msg : "Message Send Succesfully"});
    } catch (error) {
       return res.status(400).json({msg : "Message Not Send Succesfully}"});
    }
}

module.exports = contactFarm;