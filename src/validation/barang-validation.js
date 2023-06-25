import Joi from "joi";

const add = Joi.object({
    nama: Joi.string().max(100).required(),
    harga: Joi.number().required()
})

const id = Joi.object({
    id: Joi.number().required()
})

export default {
    add,
    id
}