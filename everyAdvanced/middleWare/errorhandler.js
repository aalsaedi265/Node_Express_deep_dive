
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
        case constants.UNAUTHORIZED:
                res.json({
                    title: "unauthorized",
                    message : err.message,
                    stackTrace : err.stack //shows which file is the problem at
                })
        case constants.FORBIDDEN:
                    res.json({
                        title: "forbidden",
                        message : err.message,
                        stackTrace : err.stack //shows which file is the problem at
                    })
        case constants.SERVER_ERROR:
                        res.json({
                            title: "server error",
                            message : err.message,
                            stackTrace : err.stack //shows which file is the problem at
                        })
        default:
            console.log("perfection")
            break;
    }

}

module.exports =errorHandler