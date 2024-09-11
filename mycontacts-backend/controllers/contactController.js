//make it async to work with Mongodb
//This can handle error while using async
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async(req, res)=>{
    //When you call find() without passing any filter or query object,
    //Mongoose retrieves all documents in the collection. In this case, it gets all contacts from the "contacts" collection.
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

//@desc Create NEW contacts
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async(req, res)=>{
    console.log("The request body is ", req.body);
    //destructuring assignments to extract values from objects and arrays and assign them to variables.
    const {name, email} = req.body;
    if(!name || !email){
        //set status to error
        res.status(400);
        throw new Error("Please provide all fields");
    }
    //if there is data
    const contact = await Contact.create({
        name,
        email,
        user_id: req.user.id,
    });
    res.status(201).json(contact);
});

//@desc Get specific contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc update specific contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id && contact.user_id.toString() !== req.user.id){
        res.status(404);
        throw new Error("No Permission to update other user's contact.");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updatedContact);
});

//@desc delete specific contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id && contact.user_id.toString() !== req.user.id){
        res.status(404);
        throw new Error("No Permission to delete other user's contact.");
    }
    console.log("here");
    await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);
});

//Importing and exporting multiple named modules using {}.
module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};