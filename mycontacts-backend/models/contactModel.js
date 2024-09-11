const mongoose = require("mongoose");

//schema is a blueprint that defines how a database is organized and structured
const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the email"],
    },
}, {
    timestamps: true,
});

//This method creates a Mongoose model.
//"Contact" is the name of the model. It represents the collection name in MongoDB.
//contactSchema is the schema you previously defined, which sets the structure for the documents in the collection 
module.exports = mongoose.model("Contact", contactSchema);
