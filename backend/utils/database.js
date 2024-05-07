const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.MONGODB_URL; 

const connectToDatabase = async () => {
    try{
        await mongoose.connect(mongoURL,{
            /*useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            auth: {
                username: username,
                password: password
            }*/
        })
        console.log("Connected to MongoDB successfully done");
    }
    catch(err){
        console.error("Database connection Fail " +err);
        process.exit(0);
    }
}

module.exports = connectToDatabase;