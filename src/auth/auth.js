import jwt, { JsonWebTokenError, TokenExpiredError, sign, } from "jsonwebtoken";
import { ErrorResponse } from "../error/err-response.js";
import { response } from "../utils/wrapper.js";

const auth = async (req, res, next) => {
    try {

        const token = req.cookie("token")

        if (token === null || token === undefined)
            return response(res, null, "missing token", 402)

        const sign = jwt.verify(token, process.env.SECRET_KEY)

        sign
        
        next()
    } catch (error) {
        if (error instanceof TokenExpiredError || error instanceof JsonWebTokenError)
            return response(res, null, error.message, 401)

        return response(res, null, error.message, 500)
    }

}

export {
    auth
}