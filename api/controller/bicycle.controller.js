const service = require('../service/bicycle.service')
const ApiError = require("../error/ApiError");
const {validationResult} = require('express-validator')

class BicycleController {

    async create(req, res, next) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(404).json(ApiError.badRequest('Not valid data' + JSON.stringify(error.array())));
        const data = await service.create(req.body)
        const code = data instanceof ApiError ? data.status : 200;
        return res.status(code).json(data);
    }


    async getAll(req, res, next) {
        const data = await service.get(req.body)
        return res.json(data)
    }

    async getStatistics(req, res, next) {
        const data = await service.getStatistics(req.body)
        return res.json(data)
    }

    async edit(req, res) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(404).json(ApiError.badRequest('Not valid data'));
        const data = await service.edit(req.body)
        const code = data instanceof ApiError ? data.status : 200;
        return res.status(code).json(data);
    }

    async delete(req, res){
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(404).json(ApiError.badRequest('Not valid data'));
        const data = await service.delete(req.body)
        const code = data instanceof ApiError ? data.status : 200;
        return res.status(code).json(data);
    }
}

module.exports = new BicycleController();
