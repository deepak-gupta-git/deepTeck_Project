const mongoose = require("mongoose");
const DbURI = process.env.URI

const connectDb = async () => {
    try {
        mongoose.connect(DbURI);
        console.log("DB is connected");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;