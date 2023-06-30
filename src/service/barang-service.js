import { db } from "../app/db.js";
import barangValidation from "../validation/barang-validation.js";
import { validate } from "../validation/validation.js";


const add = async (payload) => {
    const check = validate(barangValidation.add, payload)

    const result = await db.barang.create({
        data: check,
        select: {
            nama: true,
            harga: true,
            
        }
    })

    return result

}

const getAll = async () => {
    const result = await db.barang.findMany({
        orderBy: {
            nama: "asc"
        },
        select: {
            id: true,
            nama: true,
            harga: true,
        }
    })

    return result

}

const search = async (keyword) => {
    
    const result = await db.barang.findMany({
        where: {
            nama: {
                contains: keyword,
            }
        }
    })
    return result
}

const update = async (payload, id) => {
    const checkPayload = validate(barangValidation.add, payload)
    const checkId = validate(barangValidation.id, id)

    const result = await db.barang.update({
        data: checkPayload,
        where: checkId,
        select: {
            nama: true,
            harga: true,
        }
    })

    return result
}

const deleteBarang = async (id) => {
    const checkId = validate(barangValidation.id, id)
console.log(checkId);
    const result = await db.barang.delete({
        where: checkId,
        select: {
            nama: true,
            harga: true
        }
    })

    return result
}


export default {
    add,
    update,
    getAll,
    search,
    deleteBarang
}