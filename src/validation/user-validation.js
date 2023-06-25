import joi from "joi"

const userRegister = joi.object({
    nama: joi.string().max(100).required(),
    email: joi.string().email({
        tlds: {
            allow: ["com"]
        }
    }).max(100).required(),
    password: joi.string().max(200).required(),
    role: joi.any().valid("admin", "kasir").required(),
})

const id = joi.object({
    id: joi.string().max(100).required()
})

const login = joi.object({
    email: joi.string().email({
        tlds: {
            allow: ["com"]
        }
    }).max(100).required(),
    password: joi.string().max(200).required()
})


export {
    userRegister,
    id,
    login
}