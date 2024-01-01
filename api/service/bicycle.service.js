const Bicycle = require('../models/bicycle')
const BicycleStatus = require('../models/bicycleStatus')
const ApiError = require('../error/ApiError')
const {mongoose} = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

function checkLength(string, min = 5) {
    return string && string.length > min;
}

function checkNumber(number) {
    return typeof number === 'number'
}

class BicycleService {

    async create({id, name, type, status, color, wheelSize, price, description}) {

        const exists = await Bicycle.exists({id}).exec()
        if (exists)
            return {exists: true, message: 'ID is Exists'};

        status = await BicycleStatus.findById(new ObjectId('658d66adc155bb5d9e206778'));

        const entity = new Bicycle({id, name, type, status, color, wheelSize, price, description})
        await entity.save()

        return entity;
    }

    async edit({id, status}) {

        if (!mongoose.Types.ObjectId.isValid(status)) {
            return ApiError.badRequest(`Element is not valid`);
        }

        const bicycle = await Bicycle.findOne({id});

        if (!bicycle) {
            return ApiError.badRequest(`Element by id is not found`);
        }

        const bicycleStatus = await BicycleStatus.findById(new ObjectId(status));

        if (!bicycleStatus) {
            return ApiError.badRequest(`Element status by id is not found`);
        }

        bicycle.set('status', bicycleStatus);
        await bicycle.save();

        return bicycle;
    }

    async get(param) {
        return await Bicycle.find({...param}).populate('status').sort({status: -1});
    }

    async getStatistics() {
        const bicycles = await Bicycle.aggregate([{
            $group: {
                _id: null,
                avg: {$avg: "$price"},
                total: {$sum: '$price'}
            },
        }])


        const count = await Bicycle.countDocuments()
        const countUnavailable = await Bicycle.countDocuments({status: '658d668fc155bb5d9e206777'})
        const countAvailable = await Bicycle.countDocuments({status: '658d6521c155bb5d9e206776'})
        console.log(bicycles[0].avg);
        return {count, countAvailable, countUnavailable, avgPrice: bicycles[0].avg};
    }

    async delete({id}) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return ApiError.badRequest(`Element is not valid`);
        }
        return await Bicycle.findByIdAndDelete(id);
    }

}

module.exports = new BicycleService();
