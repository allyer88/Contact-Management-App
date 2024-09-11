//make it async to work with Mongodb
//This can handle error while using async
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//To hash the password
const bcrypt = require("bcrypt");
//for login
const jwt = require("jsonwebtoken")


//@desc Register a contact
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    //check whether the user is registered
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }
    //if not registered
    //Hash the password, salt rounds: will perform 2^10 (1024) iterations of the hashing algorithm
    const hashedPW = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPW
    });
    console.log(`User created`);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    //make sure the user is in the database
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        //sign() => used to create a JWT
        const accessToken = jwt.sign({
            //we don't want to embed password, only non-sensitive user data
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, //ACCESS_TOKEN_SECRET is used to generate the signature(see note) in the JWT. 
            process.env.ACCESS_TOKEN_SECRET,
            {//How long shoule the access token secret expire
                expiresIn: "1h"
            });
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});

//@desc Get the current user information
//@route GET /api/users/currentInfo
//@access private
const currentUserInfo = asyncHandler(async (req, res) => {
    res.json(req.user);
});

//Importing and exporting multiple named modules using {}.
module.exports = { registerUser, loginUser, currentUserInfo };