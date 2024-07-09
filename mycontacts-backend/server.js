//Import
const express = require("express"); //Improt the Express module
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config(); //Import to access .env file


const app = express(); // Create an instance of an Express application
const port = process.env.PORT || 5000;

//built-in
//When a request is received with a JSON payload, 
//this middleware parses the JSON, and the resulting object is made available on req.body.
app.use(express.json());
//a route handler for GET requests to the /api/contacts endpoint
app.use("/api/contacts", require("./routes/contactRoutes"));
//defined by ourself
//middleware that parses the error to json
//must place after app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

//start the server on port 5000 and do something
app.listen(port, ()=>{
    console.log(port);
});