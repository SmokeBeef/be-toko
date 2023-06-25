
class ErrorResponse extends Error {

    constructor(status, msg) {
        super(msg)
        this.status = status
    }
}

export {
    ErrorResponse
}