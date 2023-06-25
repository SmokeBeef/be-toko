

const response = (res, data, msg, status) => {
    if (status < 400)
        return res.status(status).json({
            status: "success",
            msg,
            data,
        })

    return res.status(status).json({
        status: "fail",
        msg,
        data,
    })

}

const responsePagination = (res, data, msg, meta, status) => {
    if (status < 400)
        return res.status(status).json({
            status: "success",
            msg,
            data,
            meta
        })

    return res.status(status).json({
        status: "fail",
        msg,
        data,
        meta,
    })

}

export {
    response,
    responsePagination
}