const {constants} = require("../constants");

const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message : err.message,
                stackTrack : err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"Not found",
                message : err.message,
                stackTrack : err.stack
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorized",
                message : err.message,
                stackTrack : err.stack
            })
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                title:"validation error",
                message : err.message,
                stackTrack : err.stack
            })
            break;
        default:
            console.log("All good~");
            break;
    }
};

module.exports = errorHandler;