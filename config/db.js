const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`CONNECTED to MONGODB database ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`MONGO connect error ${error}`.bgRed.white);
    }
};

module.exports = connectDB;