import { logger } from "../app/logger.js"
import { ErrorResponse } from "../error/err-response.js"

const validate = (schema, req) => {
    const val = schema.validate(req)
    console.log(val);
    const { error, value } = schema.validate(req)
    console.log(error, value);
    if (error) throw new ErrorResponse(400, error.message)
    else return value
}

export {
    validate
}