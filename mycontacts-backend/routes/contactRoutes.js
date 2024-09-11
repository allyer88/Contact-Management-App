const express = require("express");
const router = express.Router();
const {getContacts, createContact, getContact, updateContact, deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

//all the route will be validate first(private route)
router.use(validateToken);

router.route("/").get(getContacts).post(createContact);
//router.route("/").post(createContact); make code clean => two lines into one

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

//export functions, objects, or primitive values from a given module so that 
//they can be used in other files within the same project
module.exports = router;