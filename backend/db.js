const mongoose = require("mongoose");

const mongoDburl = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = async () => {
    mongoose.connect(mongoDburl, ()=> {
        console.log("connected to mongo Successfully");
    })
}

module.exports = connectToMongo;