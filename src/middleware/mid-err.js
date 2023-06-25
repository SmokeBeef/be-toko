import { ErrorResponse } from "../error/err-response.js"


const errMiddleware = async (err, req, res, next) => {
    if (err instanceof ErrorResponse) {
        return res.status(err.status).json({
            err: err.message
        }).end()
    } 
    else {
        res.status(500).json({
            err: err.msg || "internal error"
        }).end()
    }
}

export {
    errMiddleware
}