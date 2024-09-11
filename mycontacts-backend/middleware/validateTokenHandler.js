const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next)=>{
    let token;
    //Some clients or libraries might send the header as Authorization.
    //Others might send it as authorization
    let authHeader = req.headers.Authorization || req.headers.authorization; //we create "Authorization" in http headers
    if(authHeader && authHeader.startsWith("Bearer")){
        //Bearer thisistoken....
        //We want to get thisistoken....
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET ,(err, decode)=>{
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = decode.user;
            next();
        });
        if(!token){
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
});

module.exports = validateToken;