const mongoose = require("mongoose");

const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECT_STRING);
        console.log("Databse connected: ", connect.connection.host, connect.connection.name);
    }catch(e){
        console.log("Databse connected failed: ", e);
        process.exit(1);
    }
};

module.exports = connectDb;