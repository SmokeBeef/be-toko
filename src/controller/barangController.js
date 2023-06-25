import barangService from "../service/barang-service.js"
import { response } from "../utils/wrapper.js"

const add = async (req, res, next) => {
    try {
        const result = await barangService.add(req.body)

        return response(res, result, "success add barang", 201)
    } catch (error) {
        next(error)
    }
}

const getAll = async (req, res, next) => {
    try {
        const result = await barangService.getAll()

        return response(res, result, "success get all", 200)

    } catch (error) {
        next(error)
    }
}

const search = async (req, res, next) => {
    try {
        const result = await barangService.search(req.params.keyword)

        return response(res, result, "success search barang", 200)

    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await barangService.update(req.body, req.params)

        return response(res, result, "success update", 201)
    } catch (error) {
        next(error)
    }
}

const deleteBarang = async (req, res, next) => {
    try {
        const result = await barangService.deleteBarang(req.params)
        return response(res, result, "success delete", 200)
    } catch (error) {
        next(error)
    }
}

export default {
    add,
    deleteBarang,
    getAll,
    search,
    update
}