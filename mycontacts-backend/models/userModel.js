const mongoose = require("mongoose");

//schema is a blueprint that defines how a database is organized and structured
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter the user name"],
    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        //the same email cannot be registered again 
        unique:[true, "Email address is already taken"]
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
    },
}, {
    timestamps: true,
});

//This method creates a Mongoose model.
//"Contact" is the name of the model. It represents the collection name in MongoDB.
//contactSchema is the schema you previously defined, which sets the structure for the documents in the collection 
module.exports = mongoose.model("User", userSchema);