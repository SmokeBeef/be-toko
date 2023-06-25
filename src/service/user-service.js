import { db } from "../app/db.js"
import { ErrorResponse } from "../error/err-response.js"
import { userRegister, login, id } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import jwt from "jsonwebtoken"


const register = async (payload) => {

    const user = validate(userRegister, payload)

    const cekEmail = await db.user.count({
        where: {
            email: user.email
        }
    })

    if (cekEmail === 1) throw new ErrorResponse(409, "email already exist")

    user.password = await bcrypt.hash(user.password, 10)

    user.id = uuid()
    user.createAt = new Date()
    return await db.user.create({

        data: user,
        select: {
            id: true,
            nama: true,
            email: true,
            role: true,
        }
    })

}

const userLogin = async (request) => {

    const payload = validate(login, request)

    
    const cek = await db.user.findUnique({
        where: {
            email: payload.email
        },
        select: {
            nama: true,
            password: true,
            email: true,
            role: true,
        }
    })

    console.log(cek);

    if (!cek) throw new ErrorResponse(404, "Email Or Password are not sign")


    await bcrypt.compare(payload.password, cek.password)
        .then(res => {
            console.log(res);
            if (!res)
                throw new ErrorResponse(404, "Email Or Password are not sign")

        })


    const tokenRefresh = jwt.sign(cek, process.env.SECRET_KEY_REFRESH, {
        expiresIn: "7d",
    })
    const token = jwt.sign(cek, process.env.SECRET_KEY, {
        expiresIn: "60s"
    })

    const result = await db.user.update({
        where: {
            email: cek.email
        },
        data: {
            token: tokenRefresh
        },
        select: {
            id: true,
            nama: true,
            email: true,
            role: true,
        }
    })

    result.token = token
    

    return [result, tokenRefresh]
}

const logout = async (request) => {

    const payload = validate(id, request)
    console.log(id);

    const logout = await db.user.update({
        where: payload,
        data: {
            token: null
        },
        select: {
            email: true,
            nama: true
        }
        
    })

    return logout
}

export default {
    register,
    userLogin,
    logout
}