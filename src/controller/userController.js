import userService from "../service/user-service.js"
import { response } from "../utils/wrapper.js"
import jwt from "jsonwebtoken"
import { id } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"

const register = async (req, res, next) => {
    try {
        const payload = req.body
        const result = await userService.register(payload)
        return response(res, result, "success register user", 201)

    } catch (e) {
        next(e)
    }
}

const destroy = async (req, res, next) => {
    try {
        const params = req.params


    } catch (error) {
        next(error)
    }
}
const update = async (req,res,next) => {
    try {
        
    } catch (error) {
        
    }
}

const login = async (req, res, next) => {
    try {
        const result = await userService.userLogin(req.body)

        console.log(result);
        res.cookie("refreshToken", result[1], {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true
        })
        return response(res, result[0], "Success Login", 200)

    } catch (error) {
        next(error)
    }
}

const logout = async (req, res, next) => {
    try {
        const payload = req.params
        console.log(payload);

        const result = await userService.logout(payload)

        res.clearCookie("refreshToken")

        return response(res, result, "success logout", 200)
    } catch (error) {
        next(error)
    }
}

export default {
    register,
    login,
    logout
}