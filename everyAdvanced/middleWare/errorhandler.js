
const {constants} = require("../constants")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode? res.statusCode : 500;

    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failer",
                message : err.message,
                stackTrace : err.stack //shows which file is the problem at
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message : err.message,
                stackTrace : err.stack //shows which file is the problem at
            })
        default:
            break;
    }

}

module.exports =errorHandler