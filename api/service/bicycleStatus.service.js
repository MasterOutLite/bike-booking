const Bicycle = require('../models/bicycle');
const BicycleStatus = require('../models/bicycleStatus');
const ApiError = require("../error/ApiError");
const {raw} = require("express");

function checkLength(string, min = 5) {
    return string && string.length > min;
}

function checkNumber(number) {
    return typeof number === 'number'
}

class BicycleStatusService {

    async create({name}, next) {
        const check = checkLength(name);
        if (!check) return ApiError.badRequest('Element is not valid');

        const entity = new BicycleStatus({name})
        await entity.save()

        return {med: 'none'};
    }

    async init() {
        const unavailable = new BicycleStatus({_id: '658d6521c155bb5d9e206776', name: 'Unavailable'})
        const busy = new BicycleStatus({_id: '658d668fc155bb5d9e206777', name: 'Busy'})
        const available = new BicycleStatus({_id: '658d66adc155bb5d9e206778', name: 'Available'})

        await unavailable.save()
        await busy.save();
        await available.save();
    }

    async getAll() {
        return await BicycleStatus.find();
    }
}

module.exports = new BicycleStatusService();
