//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res)=>{
    res.status(200).json({
        message: "Get all contacts"
    });
};

//@desc Create NEW contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res)=>{
    console.log("The request body is ", req.body);
    //destructuring assignments to extract values from objects and arrays and assign them to variables.
    const {name, age, email} = req.body;
    if(!name || !age || !email){
        //set status to error
        res.status(400);
        throw new Error("Please provide all fields");
    }
    res.status(201).json({
        message: "Create contacts"
    });
};

//@desc Get specific contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res)=>{
    res.status(200).json({
        message: `Get contact for ${req.params.id}`
    });
};

//@desc update specific contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res)=>{
    res.status(200).json({
        message: `Update contact for ${req.params.id}`
    });
};

//@desc delete specific contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res)=>{
    res.status(200).json({
        message: `Delete contact for ${req.params.id}`
    });
};

//Importing and exporting multiple named modules using {}.
module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};